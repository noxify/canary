defmodule Canary.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    attach_oban_telemetry()

    Canary.Index.Collection.ensure(:webpage)
    Canary.Index.Collection.ensure(:github_issue)
    Canary.Index.Collection.ensure(:github_discussion)
    Canary.Index.Stopword.ensure()

    children =
      [
        Canary.Vault,
        {Cachex, name: :cache},
        {Task.Supervisor, name: Canary.TaskSupervisor},
        {AshAuthentication.Supervisor, otp_app: :canary},
        CanaryWeb.Telemetry,
        Canary.Repo,
        {Oban, Application.fetch_env!(:canary, Oban)},
        {DNSCluster, query: Application.get_env(:canary, :dns_cluster_query) || :ignore},
        {Phoenix.PubSub, name: Canary.PubSub},
        # Start the Finch HTTP client for sending emails
        {Finch, name: Canary.Finch}
      ] ++ discord() ++ stripe() ++ [CanaryWeb.Endpoint]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Canary.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    CanaryWeb.Endpoint.config_change(changed, removed)
    :ok
  end

  defp discord() do
    if Application.get_env(:nostrum, :token) do
      [Nostrum.Application, Canary.Sources.DiscordConsumer]
    else
      []
    end
  end

  defp stripe do
    if Application.get_env(:canary, :dev_routes, false) and
         not is_nil(Application.get_env(:canary, :stripe)) and
         Phoenix.Endpoint.server?(:canary, CanaryWeb.Endpoint) do
      [{Canary.StripeWebhookListener, [forward_to: "http://localhost:4000/webhook/stripe"]}]
    else
      []
    end
  end

  # https://hexdocs.pm/oban/Oban.Telemetry.html#module-job-events
  defp attach_oban_telemetry do
    :telemetry.attach_many(
      "oban-job-events",
      [
        [:oban, :job, :start],
        [:oban, :job, :stop],
        [:oban, :job, :exception]
      ],
      &Canary.Workers.Reporter.handle_job/4,
      nil
    )
  end
end
