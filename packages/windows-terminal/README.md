<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme for Windows Terminal and another apps
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
  <img alt="preview" src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/aura-windows-terminal-preview.png?raw=true" />
</p>


# Installation
1. Start Windows Terminal.
2. Click on the down arrow icon and select the `Settings` option.
3. On the left menu, select `Open JSON file`
4. In the `settings.json` file, find the section called "Schemes" and paste the content of [aura-theme.json](https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/windows-terminal/aura-theme.json) inside of schemes array `[ ]`.
5. Yet in the `settings.json`file, find the profiles section and set a "colorScheme" value on the `default profile` as the following example:
    ```json
    "profiles": {
        "defaults": {
            "colorScheme": "Aura Theme"
        }
    }
    ```

<br/>
Done! ✨ 🎉
<br/>
<br/>

# Contributors
<table>
  <thead>
    <tr>
      <td valign="bottom"><p align="center">
  <a href="https://github.com/daltonmenezes">
    <img src="https://github.com/daltonmenezes.png?size=100" align="center" />
  </a>
</p></td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><a href="https://github.com/daltonmenezes">Dalton Menezes</a></td>
    </tr>
  </tbody>
</table>

# License
[MIT © Dalton Menezes](https://github.com/daltonmenezes/aura-theme/blob/main/LICENSE)