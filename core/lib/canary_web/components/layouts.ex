defmodule CanaryWeb.Layouts do
  use CanaryWeb, :html

  embed_templates "layouts/*"

  attr :active_tab, :any, default: nil

  def side_menu(assigns) do
    ~H"""
    <aside class="drawer-side z-10">
      <label for="canary-drawer" class="drawer-overlay"></label>
      <nav class="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-10">
        <.link class="mx-4 font-black flex flex-row gap-2" href="/">
          <span>🐤</span>
          <span>Canary</span>
        </.link>
        <ul class="menu">
          <li>
            <.link class={if @active_tab == :home, do: "active"} navigate={~p"/"}>
              <span class={[
                "h-4 w-4",
                if(@active_tab == :home,
                  do: "hero-home-solid",
                  else: "hero-home"
                )
              ]} />
              <span>Home</span>
            </.link>
          </li>
          <li>
            <.link class={if @active_tab == :sources, do: "active"} navigate={~p"/sources"}>
              <span class={[
                "h-4 w-4",
                if(@active_tab == :sources,
                  do: "hero-book-open-solid",
                  else: "hero-book-open"
                )
              ]} />
              <span>Sources</span>
            </.link>
          </li>
          <li>
            <.link class={if @active_tab == :clients, do: "active"} navigate={~p"/clients"}>
              <span class={[
                "h-4 w-4",
                if(@active_tab == :clients,
                  do: "hero-megaphone-solid",
                  else: "hero-megaphone"
                )
              ]} />
              <span>Clients</span>
            </.link>
          </li>
          <li>
            <.link class={if @active_tab == :settings, do: "active"} navigate={~p"/settings"}>
              <span class={[
                "h-4 w-4",
                if(@active_tab == :settings,
                  do: "hero-cog-6-tooth-solid",
                  else: "hero-cog-6-tooth"
                )
              ]} />
              <span>Settings</span>
            </.link>
          </li>
        </ul>
      </nav>
    </aside>
    """
  end
end
