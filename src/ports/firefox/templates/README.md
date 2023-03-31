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

  <!-- firefox version -->
  <a href="https://addons.mozilla.org/en-US/firefox/addon/{{ slug }}/">
    <img alt="firefox version" src="https://img.shields.io/amo/v/{{ slug }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>

  <!-- downloads -->
  <a href="https://addons.mozilla.org/en-US/firefox/addon/{{ slug }}/">
    <img alt="firefox version" src="https://img.shields.io/amo/dw/{{ slug }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>

  <!-- ratings -->
  <a href="https://addons.mozilla.org/en-US/firefox/addon/{{ slug }}/">
    <img alt="firefox version" src="https://img.shields.io/amo/rating/{{ slug }}.svg?style=for-the-badge&labelColor={{ badges.primaryColor }}&color={{ badges.secondaryColor }}">
  </a>
</p>

{{ #previewURL }}
<p align="center">
  <img alt="preview" src="{{{ previewURL }}}" />
</p>
{{ /previewURL }}

# Installation
<a href="https://addons.mozilla.org/en-US/firefox/addon/aura-theme/">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/icons/firefox.png?raw=true" align="center" alt="Download it on Firefox add-ons webiste"/>
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