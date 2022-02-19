<p align="center">
  <img src="https://github.com/{{ author.username }}/assets/blob/master/images/{{ slug }}/new-heading.png?raw=true" alt="{{ displayName }}" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme with four variants for Visual Studio Code. Two of these variants are focused on long-term work without causing any discomfort to the eyes
  <br><br>

  <!-- Patreon -->
  <a href="https://www.patreon.com/{{ author.username }}">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-{{ badges.primaryColor }}?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
  <!-- Preview in vscode.dev -->
  <a href="https://vscode.dev/theme/{{ author.username }}.{{ slug }}">
    <img alt="preview in vscode.dev" src="https://img.shields.io/badge/preview%20in-vscode.dev-{{ badges.primaryColor }}?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>  
  <!-- marketplace version -->
  <a href="https://marketplace.visualstudio.com/items?itemName=DaltonMenezes.{{ slug }}">
    <img alt="marketplace version" src="https://img.shields.io/vscode-marketplace/v/DaltonMenezes.{{ slug }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
  <!-- downloads -->
  <a href="https://marketplace.visualstudio.com/items?itemName=DaltonMenezes.{{ slug }}">
    <img alt="downloads" src="https://img.shields.io/visual-studio-marketplace/d/DaltonMenezes.{{ slug }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
  <!-- rating -->
  <a href="https://marketplace.visualstudio.com/items?itemName=DaltonMenezes.{{ slug }}">
    <img alt="rating" src="https://img.shields.io/visual-studio-marketplace/stars/DaltonMenezes.{{ slug }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
</p>

<p align="center">
  <img alt="preview" src="https://github.com/{{ author.username }}/assets/blob/master/images/{{ slug }}/aura-vscode-preview.png?raw=true" >
</p>


# Themes available
  - Aura Dark
  - Aura Dark (Soft Text)
  - Aura Soft Dark
  - Aura Soft Dark (Soft Text)

# Installation
1. Open the **Extensions** sidebar in VS Code
2. Search for [Aura Theme](https://marketplace.visualstudio.com/items?itemName=DaltonMenezes.{{ slug }})
3. Click **Install**
4. Open the **Command Palette** with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> or <kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>P</kbd>
5. Select **Preferences: Color Theme** and choose an Aura variant.

# Getting full experience
1. Install [Fira Code font](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)
2. Install [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

# Changelog

## 2.1.2 (February 19, 2022)
- Improve status bar colors when debbuging
- Improve breakpoint frame highlight

## 2.1.1 (February 17, 2022)
- Improve the Dart/Flutter support

## 2.1.0 (October 14, 2021)
- Add colors to editor inlay hint
- Update selection color to accent20
- Update JSX children texts to be green
## 2.0.1 (October 3, 2021)
- Replace Aura Dark to Aura Dark Plus but keeping the name
- Update yellow accents, like in functions, for an orange tone
- Update Shock pink accents as in object properties for a softer tone
- Update active and inactive selected file list items to have a clearer background for easier 
- Update scrollbar background color for the text selection accent making it clearer and with a slight transparency avoiding the loss of relevant information.
- jsx: Update the color of the component tags for better differentiation and more consistent with the color given at the time they are defined.
- Update the active tab foreground to be green
- Update active icon color on sidebar to green
- Better support for:
    - Elixir
    - Python
    - GraphQL
    - Env files
    - Markdown
    - CSS

[See full changelog](https://github.com/{{ author.username }}/{{ slug }}/blob/main/packages/vscode/CHANGELOG.md)

# Contributors
<table>
  <thead>
    <tr>
      {{{ author-thead }}}
    </tr>
  </thead>

  <tbody>
    {{{ author-tbody }}}
  </tbody>
</table>

{{{ footer }}}