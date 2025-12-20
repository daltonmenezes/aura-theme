<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme for Bat and other apps
  <br><br>

  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca">
  </a>

  <!-- version -->
  <a href="#">
    <img alt="version" src="https://img.shields.io/badge/version%20-v1.0.0-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca">
  </a>
</p>

<p align="center">
  <img alt="preview" src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/aura-bat-preview.png?raw=true" />
</p>


# Installation

1. Ensure you have [bat](https://github.com/sharkdp/bat) installed.
2. Create the themes directory for bat if it doesn't exist:

   ```sh
   mkdir -p ~/.config/bat/themes
   ```

3. Fetch the `aura-theme.tmTheme` file from the [repository](https://github.com/daltonmenezes/aura-theme) with the following command:

   ```sh
   curl -o ~/.config/bat/themes/aura-theme.tmTheme https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/bat/aura-theme.tmTheme
   ```

   **NOTE**: You can replace `aura-theme.tmTheme` with `aura-theme-soft.tmTheme` to use the Soft Dark variant.

4. Clean and rebuild bat's cache to recognize the new theme:

   ```sh
   bat --cache clear && bat --cache rebuild
   ```

5. Configure bat to use the Aura Theme by default by adding the following line to your `~/.config/bat/config` file (create the file if it doesn't exist):

   ```toml
   --theme="aura-theme"
   ```

   alternatively, you can set the `BAT_THEME` environment variable in your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`):

   ```sh
   export BAT_THEME="aura-theme"
   ```

   **NOTE**: Use `aura-theme-soft` if you opted for the Soft Dark variant.

<br/>
Done! ✨ 🎉
<br/>
<br/>

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
      <td valign="bottom"><p align="center">
  <a href="https://github.com/daltonmenezes">
    <img src="https://github.com/daltonmenezes.png?size=100" align="center" />
  </a>
</p></td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><a href="https://github.com/arrrgi">Rowan Gillson</a></td>
      <td><a href="https://github.com/daltonmenezes">Dalton Menezes</a></td>
    </tr>
  </tbody>
</table>

# License
[MIT © Dalton Menezes](https://github.com/daltonmenezes/aura-theme/blob/main/LICENSE)
