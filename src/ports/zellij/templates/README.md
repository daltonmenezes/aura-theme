{{{ basic-heading }}}

## Installation

Ensure you already have **Zellij** installed on your system. You can find installation instructions on the [official website](https://zellij.dev/documentation/installation.html).

1. Create a directory to store custom themes for **Zellij** (if it doesn't already exist):

   ```sh
   mkdir -p ~/.config/zellij/themes
   ```

2. Fetch the `aura-theme-dark.kdl` and `aura-theme-dark-soft.kdl` files from the [repository]({{{ repository }}}) with the following command:

   ```sh
   curl -o ~/.config/zellij/themes/aura-theme-dark.kdl https://raw.githubusercontent.com/daltonmenezes/{{ slug }}/main/packages/zellij/{{ slug }}-dark.kdl
   ```

   **NOTE:** You can replace `{{ slug }}-dark.kdl` with `{{ slug }}-dark-soft.kdl` in the command above to download the Dark Soft variant instead.

3. Update your Zellij configuratiion file (usually located at `~/.config/zellij/config.kdl`) to set the theme. Add or modify the following line:

   Replace:

   ```kdl
   // theme "default"
   ```

   With:

   ```kdl
   theme "aura-theme-dark" // or "aura-theme-dark-soft" for the soft variant
   ```

4. Restart **Zellij** to apply the new theme.

<br/>

> A note on using **Zellij's** internal themes
>
> **Zellij** comes with a set of built-in themes that you can use without needing to download any additional files. Native support within **Zellij** for the {{ displayName }} may be added in the future, pending PR approval and an updated build by the Zellij maintainer.

{{{ done }}}

# Contributors

<table>
  <thead>
    <tr>
      <td valign="bottom">
        <p align="center">
          <a href="https://github.com/arrrgi">
            <img src="https://github.com/arrrgi.png?size=100" align="center" />
          </a>
        </p>
      </td>
      {{{ author-thead }}}
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><a href="https://github.com/arrrgi">Rowan Gillson</a></td>
      {{{ author-tbody }}}
    </tr>
  </tbody>
</table>

{{{ footer }}}
