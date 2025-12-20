<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme for Lsd and other apps
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
  <img alt="preview" src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/aura-lsd-preview.png?raw=true" />
</p>


## Installation

Ensure you already have **LSD** installed on your system. You can find installation instructions on the [GitHub repository](https://github.com/lsd-rs/lsd) for **LSD**.

1. Create a directory to store the config and color scheme for **LSD** (if it doesn't already exist):

   ```sh
   mkdir -p ~/.config/lsd
   ```

2. Fetch either the `dark-colors.yaml` or `dark-soft-colors.yaml` file from the [repository](https://github.com/daltonmenezes/aura-theme) with the following command:

   ```sh
   curl -o ~/.config/lsd/colors.yaml https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/lsd/dark-colors.yaml
   ```

   **NOTE:** You can replace `dark-colors.yaml` with `dark-soft-colors.yaml` in the command above to download the Dark Soft variant.

3. Also fetch the the example `config.yaml` configuration file if you don't have one already:

   ```sh
    curl -o ~/.config/lsd/config.yaml https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/lsd/config.yaml
   ```

4. Update the `config.yaml` file with your preferred settings, making sure to keep/set the value of the **`theme`** option to `custom`;

   ```yaml
   color:
     when: always
     theme: custom
   ```

## Usage Tips

- The **LSD** repository recommends using some useful aliases for better experience. You should consider adding the following aliases to your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`, etc.):

  ```sh
  alias ls='lsd'
  alias l='ls -l'
  alias la='ls -a'
  alias lla='ls -la'
  alias lt='ls --tree
  ```

- To colorize the file names to match Aura Theme, **LSD** supports custom color schemes via the `LS_COLORS` environment variable. You can set this up with the Aura Theme color scheme for **Vivid** that is also packaged in this repository.

  Check out the [Aura Theme for Vivid README](https://github.com/daltonmenezes/aura-theme/blob/main/packages/vivid/README.md) for more details.

<br/>

> A note on using **Vivid's** internal themes
>
> **Vivid** comes with a set of built-in themes that you can use without needing to download any additional files. Native support within **Vivid** for the Aura Theme may be added in the future, pending PR approval and an updated build by the maintainer.

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
