<p align="center">
  <img src="https://github.com/{{ author.username }}/assets/blob/master/images/{{ slug }}/new-heading.png?raw=true" alt="{{ displayName }}" width="70%" />
</p>

<p align="center">
{{ #noTagLine }}{{ /noTagLine }}
{{ ^noTagLine }}
✨ A beautiful dark theme for {{ portName }} and other apps
  <br><br>
{{ /noTagLine }}

  <!-- Patreon -->
  <a href="https://www.patreon.com/{{ author.username }}">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-{{ badges.primaryColor }}?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>

  <!-- version -->
  <a href="#">
    <img alt="version" src="https://img.shields.io/badge/version%20-v{{ version }}-{{ badges.primaryColor }}?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
</p>

{{ #previewURL }}
<p align="center">
  <img alt="preview" src="{{{ previewURL }}}" />
</p>
{{ /previewURL }}