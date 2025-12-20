{{{ basic-heading }}}

## Installation

Ensure you already have **LSD** installed on your system. You can find installation instructions on the [GitHub repository](https://github.com/lsd-rs/lsd) for **LSD**.

1. Create a directory to store the config and color scheme for **LSD** (if it doesn't already exist):

   ```sh
   mkdir -p ~/.config/lsd
   ```

2. Fetch either the `dark-colors.yaml` or `dark-soft-colors.yaml` file from the [repository](https://github.com/daltonmenezes/{{ slug }}) with the following command:

   ```sh
   curl -o ~/.config/lsd/colors.yaml https://raw.githubusercontent.com/daltonmenezes/{{ slug }}/main/packages/lsd/dark-colors.yaml
   ```

   **NOTE:** You can replace `dark-colors.yaml` with `dark-soft-colors.yaml` in the command above to download the Dark Soft variant.

3. Also fetch the the example `config.yaml` configuration file if you don't have one already:

   ```sh
    curl -o ~/.config/lsd/config.yaml https://raw.githubusercontent.com/daltonmenezes/{{ slug }}/main/packages/lsd/config.yaml
   ```

4. Update the `config.yaml` file with your preferred settings, making sure to keep/set the value of the **`theme`** option to `custom`;

   ```yaml
   color:
     when: always
     theme: custom
   ```

## Usage Tips

- The **LSD** repository recommends using some useful aliases for better experience. You should consider adding the following aliases to your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`, etc.):

  ```sh
  alias ls='lsd'
  alias l='ls -l'
  alias la='ls -a'
  alias lla='ls -la'
  alias lt='ls --tree
  ```

- To colorize the file names to match {{ displayName }}, **LSD** supports custom color schemes via the `LS_COLORS` environment variable. You can set this up with the {{ displayName }} color scheme for **Vivid** that is also packaged in this repository.

  Check out the [{{ displayName}} for Vivid README](https://github.com/daltonmenezes/{{ slug }}/blob/main/packages/vivid/README.md) for more details.

<br/>

> A note on using **Vivid's** internal themes
>
> **Vivid** comes with a set of built-in themes that you can use without needing to download any additional files. Native support within **Vivid** for the {{ displayName }} may be added in the future, pending PR approval and an updated build by the maintainer.

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
