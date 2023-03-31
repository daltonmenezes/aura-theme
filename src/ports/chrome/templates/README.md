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

  <!-- chrome version -->
  <a href="#">
    <img alt="chrome version" src="https://img.shields.io/chrome-web-store/v/{{ extensionID }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>

  <!-- chrome users -->
  <a href="#">
    <img alt="chrome users" src="https://img.shields.io/chrome-web-store/users/{{ extensionID }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>

  <!-- chrome stars -->
  <a href="#">
    <img alt="chrome stars" src="https://img.shields.io/chrome-web-store/stars/{{ extensionID }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
</p>

{{ #previewURL }}
<p align="center">
  <img alt="preview" src="{{{ previewURL }}}" />
</p>
{{ /previewURL }}

# Installation
<a href="https://chrome.google.com/webstore/detail/{{ slug }}/{{ extensionID }}">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/icons/chrome.png?raw=true" align="center" />
</a>

<br/><br/>

# Contributors
<table>
  <thead>
    <tr>
      {{{ author-thead }}}
    </tr>
  </thead>

  <tbody>
    <tr>
      {{{ author-tbody }}}
    </tr>
  </tbody>
</table>

{{{ footer }}}