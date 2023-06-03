<p align="center">
  <img src="https://github.com/{{ author.username }}/assets/blob/master/images/{{ slug }}/new-heading.png?raw=true" alt="{{ displayName }}" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme for {{ portName }} and other apps
  <br><br>

  <!-- Patreon -->
  <a href="https://www.patreon.com/{{ author.username }}">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-{{ badges.primaryColor }}?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>

  <!-- npm version -->
  <a href="https://www.npmjs.com/package/{{ npmPackage }}">
    <img alt="npm version" src="https://img.shields.io/npm/v/{{ npmPackage }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>

  <!-- downloads -->
  <a href="https://www.npmjs.com/package/{{ npmPackage }}">
    <img alt="npm version" src="https://img.shields.io/npm/dm/{{ npmPackage }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
</p>

{{ #previewURL }}
<p align="center">
  <img alt="preview" src="{{{ previewURL }}}" />
</p>
{{ /previewURL }}