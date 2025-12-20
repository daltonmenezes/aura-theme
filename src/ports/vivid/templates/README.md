{{{ basic-heading }}}

# Installation

Ensure you have **Vivid** installed on your system. You can find installation instructions on the [Vivid GitHub repository](https://github.com/sharkdp/vivid).

1. Create a directory to store custom themes for **Vivid** (if it doesn't already exist):

   ```sh
   mkdir -p ~/.config/vivid/themes
   ```

2. Fetch the `{{ slug }}-dark.yml` and `{{ slug }}-dark-soft.yml` files from the [repository](https://github.com/daltonmenezes/{{ slug }}) with the following command:

   ```sh
   curl -o ~/.config/vivid/themes/{{ slug }}-dark.yml https://raw.githubusercontent.com/daltonmenezes/{{ slug }}/main/packages/vivid/{{ slug }}-dark.yml
   ```

   **NOTE:** You can replace `{{ slug }}-dark.yml` with `{{ slug }}-dark-soft.yml` in the command above to download the Dark Soft variant.

3. Add the {{ displayName }} to your shell RC file (e.g., `~/.bashrc`, `~/.zshrc`, etc.) by sourcing the theme directly from your local Vivid themes:

   ```sh
   export LS_COLORS="$(vivid generate ${HOME}/.config/vivid/themes/{{ slug }}-dark.yml)"
   ```

   or for the Dark Soft variant:

   ```sh
   export LS_COLORS="$(vivid generate ${HOME}/.config/vivid/themes/{{ slug }}-dark-soft.yml)"
   ```

   **NOTE:** On MacOS, you may need to use the GNU version of `ls` (e.g., `gls`) as the default BSD version of `ls` does not support colorization:

   ```sh
   if ! command -v gls &> /dev/null; then
     brew install coreutils
     echo 'alias ls="gls --color=auto"' >> ~/.zshrc
   fi
   ```

4. Restart your terminal or source your RC file to apply the changes:

   ```sh
   source ~/.zshrc  # or source ~/.bashrc, etc.
   ```

<br>

> A note on using **Vivid's** internal themes
>
> **Vivid** comes with a set of built-in themes that you can use without needing to download any additional files. Native support within **Vivid** for the {{ displayName }} may be added in the future, pending PR approval and an updated build by the Vivid maintainer.

{{{ done }}}

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
      {{{ author-thead }}}
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><a href="https://github.com/arrrgi">Rowan Gillson</a></td>
      {{{ author-tbody }}}
    </tr>
  </tbody>
</table>

{{{ footer }}}
