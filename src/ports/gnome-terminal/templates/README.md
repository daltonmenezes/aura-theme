{{{ basic-heading }}}

# Installation
1. Open [{{ slug }}.dconf](https://raw.githubusercontent.com/{{ author.username }}/{{ slug }}/main/packages/gnome-terminal/{{ slug }}.dconf) and save it as `{{ slug }}.dconf` in your `home folder` without txt extension that the browser will infer 
2. Open Gnome Terminal and run:
    ```js
    dconf load /org/gnome/terminal/legacy/profiles:/:b1dcc9dd-5262-4d8d-a863-c897e6d979b9/ < ~/{{ slug }}.dconf
    ```
3. Open a new window to see if the theme has been applied, if not open the `preferences` and select the `Aura Theme` profile.

{{{ done }}}

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
