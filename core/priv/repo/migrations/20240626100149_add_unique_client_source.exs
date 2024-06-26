defmodule Canary.Repo.Migrations.AddUniqueClientSource do
  @moduledoc """
  Updates resources based on their most recent snapshots.

  This file was autogenerated with `mix ash_postgres.generate_migrations`
  """

  use Ecto.Migration

  def up do
    create unique_index(:sources, [:account_id, :name], name: "sources_unique_source_index")

    create unique_index(:clients, [:account_id, :name], name: "clients_unique_client_index")
  end

  def down do
    drop_if_exists unique_index(:clients, [:account_id, :name],
                     name: "clients_unique_client_index"
                   )

    drop_if_exists unique_index(:sources, [:account_id, :name],
                     name: "sources_unique_source_index"
                   )
  end
end
