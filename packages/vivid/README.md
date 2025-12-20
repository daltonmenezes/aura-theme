<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme for Vivid and other apps
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
  <img alt="preview" src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/aura-vivid-preview.png?raw=true" />
</p>


# Installation

Ensure you have **Vivid** installed on your system. You can find installation instructions on the [Vivid GitHub repository](https://github.com/sharkdp/vivid).

1. Create a directory to store custom themes for **Vivid** (if it doesn't already exist):

   ```sh
   mkdir -p ~/.config/vivid/themes
   ```

2. Fetch the `aura-theme-dark.yml` and `aura-theme-dark-soft.yml` files from the [repository](https://github.com/daltonmenezes/aura-theme) with the following command:

   ```sh
   curl -o ~/.config/vivid/themes/aura-theme-dark.yml https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/vivid/aura-theme-dark.yml
   ```

   **NOTE:** You can replace `aura-theme-dark.yml` with `aura-theme-dark-soft.yml` in the command above to download the Dark Soft variant.

3. Add the Aura Theme to your shell RC file (e.g., `~/.bashrc`, `~/.zshrc`, etc.) by sourcing the theme directly from your local Vivid themes:

   ```sh
   export LS_COLORS="$(vivid generate ${HOME}/.config/vivid/themes/aura-theme-dark.yml)"
   ```

   or for the Dark Soft variant:

   ```sh
   export LS_COLORS="$(vivid generate ${HOME}/.config/vivid/themes/aura-theme-dark-soft.yml)"
   ```

   **NOTE:** On MacOS, you may need to use the GNU version of `ls` (e.g., `gls`) as the default BSD version of `ls` does not support colorization:

   ```sh
   if ! command -v gls &> /dev/null; then
     brew install coreutils
     echo 'alias ls="gls --color=auto"' >> ~/.zshrc
   fi
   ```

4. Restart your terminal or source your RC file to apply the changes:

   ```sh
   source ~/.zshrc  # or source ~/.bashrc, etc.
   ```

<br>

> A note on using **Vivid's** internal themes
>
> **Vivid** comes with a set of built-in themes that you can use without needing to download any additional files. Native support within **Vivid** for the Aura Theme may be added in the future, pending PR approval and an updated build by the Vivid maintainer.

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
