{{{ basic-heading }}}

# Installation
1. Start {{ portName }}.
2. Click on the down arrow icon and select the `Settings` option.
3. On the left menu, select `Open JSON file`
4. In the `settings.json` file, find the section called "Schemes" and paste the content of [{{ slug }}.json](https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/windows-terminal/aura-theme.json) inside of schemes array `[ ]`.
5. Yet in the `settings.json`file, find the profiles section and set a "colorScheme" value on the `default profile` as the following example:
    ```json
    "profiles": {
        "defaults": {
            "colorScheme": "{{ displayName }}"
        }
    }
    ```

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