<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme for Zellij and other apps
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
  <img alt="preview" src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/aura-zellij-preview.png?raw=true" />
</p>


## Installation

Ensure you already have **Zellij** installed on your system. You can find installation instructions on the [official website](https://zellij.dev/documentation/installation.html).

1. Create a directory to store custom themes for **Zellij** (if it doesn't already exist):

   ```sh
   mkdir -p ~/.config/zellij/themes
   ```

2. Fetch the `aura-theme-dark.kdl` and `aura-theme-dark-soft.kdl` files from the [repository](https://github.com/daltonmenezes/aura-theme) with the following command:

   ```sh
   curl -o ~/.config/zellij/themes/aura-theme-dark.kdl https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/zellij/aura-theme-dark.kdl
   ```

   **NOTE:** You can replace `aura-theme-dark.kdl` with `aura-theme-dark-soft.kdl` in the command above to download the Dark Soft variant instead.

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
> **Zellij** comes with a set of built-in themes that you can use without needing to download any additional files. Native support within **Zellij** for the Aura Theme may be added in the future, pending PR approval and an updated build by the Zellij maintainer.

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
