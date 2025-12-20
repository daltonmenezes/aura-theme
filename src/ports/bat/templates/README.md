{{{ basic-heading }}}

# Installation

1. Ensure you have [bat](https://github.com/sharkdp/bat) installed.
2. Create the themes directory for bat if it doesn't exist:

   ```sh
   mkdir -p ~/.config/bat/themes
   ```

3. Fetch the `{{ slug }}.tmTheme` file from the [repository](https://github.com/daltonmenezes/{{ slug }}) with the following command:

   ```sh
   curl -o ~/.config/bat/themes/{{ slug }}.tmTheme https://raw.githubusercontent.com/daltonmenezes/{{ slug }}/main/packages/bat/{{ slug }}.tmTheme
   ```

   **NOTE**: You can replace `{{ slug }}.tmTheme` with `{{ slug }}-soft.tmTheme` to use the Soft Dark variant.

4. Clean and rebuild bat's cache to recognize the new theme:

   ```sh
   bat --cache clear && bat --cache rebuild
   ```

5. Configure bat to use the Aura Theme by default by adding the following line to your `~/.config/bat/config` file (create the file if it doesn't exist):

   ```toml
   --theme="{{ slug }}"
   ```

   alternatively, you can set the `BAT_THEME` environment variable in your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`):

   ```sh
   export BAT_THEME="{{ slug }}"
   ```

   **NOTE**: Use `{{ slug }}-soft` if you opted for the Soft Dark variant.

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
