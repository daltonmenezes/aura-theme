{{{ basic-heading }}}

# Installation
1. Start {{ portName }}.
2. Click on the down arrow icon and select the `Settings` option.
3. On the left menu, select `Open JSON file`
4. Pick one of the themes from the list and note the name of the theme:
   - [{{ slug }}.json](https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/windows-terminal/{{ slug }}.json)
   - [{{ slug }}-soft-text.json](https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/windows-terminal/{{ slug }}-soft-text.json)
   - [{{ slug }}-soft-dark.json](https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/windows-terminal/{{ slug }}-soft-dark.json)
   - [{{ slug }}-soft-dark-soft-text.json](https://raw.githubusercontent.com/daltonmenezes/aura-theme/main/packages/windows-terminal/{{ slug }}-soft-dark-soft-text.json)
5. In the `settings.json` file, find the section called "Schemes" and paste your chosen theme inside of schemes array `[ ]`.
6. Yet in the `settings.json`file, find the profiles section and set a "colorScheme" value on the `default profile` and write the name you noted, as the following example (if you chose "Aura Dark"):
     ```json
     "profiles": {
         "defaults": {
             "colorScheme": "{{ shortName }} Dark"
         }
     }
     ```


{{{ done }}}

# Contributors
<table>
  <thead>
    <tr>
      {{{ author-thead }}}
      <td valign="bottom"><p align="center">
        <a href="https://github.com/DaBultz">
          <img src="https://github.com/DaBultz.png?size=100" align="center" />
        </a>
      </p></td>
    </tr>
  </thead>

  <tbody>
    <tr>
      {{{ author-tbody }}}
      <td><a href="https://github.com/DaBultz">DaBultz</a></td>
    </tr>
  </tbody>
</table>

{{{ footer }}}