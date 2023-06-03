<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="70%" />
</p>

<p align="center">
✨ A beautiful dark theme for neovim and other apps
  <br><br>

  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca">
  </a>

  <!-- version -->
  <a href="#">
    <img alt="version" src="https://img.shields.io/badge/version%20-v0.1.0-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca">
  </a>
</p>



<p align="center">
  <img alt="preview" src="https://user-images.githubusercontent.com/1149845/243113042-8a729dfe-406d-43a3-8943-4f87740149a0.png" />
</p>

# Installation

### Lazy.nvim

```lua
return {
  { 'nvim-treesitter/nvim-treesitter', build = ':TSUpdate' },
  {
    "baliestri/aura-theme",
    lazy = false,
    priority = 1000,
    config = function(plugin)
      vim.opt.rtp:append(plugin.dir .. "/packages/neovim")
      vim.cmd([[colorscheme aura-dark]])
    end
  }
}
```

```vim
:colorscheme aura-dark " Or any Aura theme available
```

### Packer

```lua
use { 'nvim-treesitter/nvim-treesitter', run = ':TSUpdate' } -- Recommended, not required.
use {
  'daltonmenezes/aura-theme',
  rtp = 'packages/neovim',
  config = function()
    vim.cmd("colorscheme aura-dark") -- Or any Aura theme available
  end
}
```

### Vim-Plug

```vim
Plug 'nvim-treesitter/nvim-treesitter', { 'do': ':TSUpdate' } " Recommended, not required.
Plug 'daltonmenezes/aura-theme', { 'rtp': 'packages/neovim' }
```

```vim
" init.vim
colorscheme aura-dark " Or any Aura theme available
```

### Available colorschemes

| Name                     | Key                        |
| ------------------------ | -------------------------- |
| Aura Dark                | `aura-dark`                |
| Aura Dark Soft Text      | `aura-dark-soft-text`      |
| Aura Soft Dark           | `aura-soft-dark`           |
| Aura Soft Dark Soft Text | `aura-soft-dark-soft-text` |

# Known Issues

1. When using `packer.nvim`, it is not possible to load the theme at editor startup due to `rtp`, it is possible to do it in `vim-plug`, however, with `packer.nvim` this approach is not possible, so it is recommended to use the `config` option directly in the plugin call to configure the theme.

# More

<details>
  <summary>Native syntax support</summary>

###

| Language name    | Progress                    |
| ---------------- | --------------------------- |
| CSS              | 95%                         |
| HTML             | 95%                         |
| Javascript       | 5% `Better with TreeSitter` |
| Javascript React | 5% `Better with TreeSitter` |
| JSON             | 90%                         |
| Lua              | 80%                         |
| Markdown         | 80%                         |
| SASS             | 70%                         |
| Typescript       | 90%                         |
| Typescript React | 90%                         |
| YAML             | 85%                         |

</details>

# Contributors

<table>
  <thead>
    <tr>
      <td valign="middle" align="center"><p>
        <a href="https://github.com/baliestri">
          <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/46748996?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" align="center">
        </a>
      </td>
      <td valign="bottom"><p align="center">
  <a href="https://github.com/daltonmenezes">
    <img src="https://github.com/daltonmenezes.png?size=100" align="center" />
  </a>
</p></td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/baliestri">Bruno Sales</a></td>
      <td><a href="https://github.com/daltonmenezes">Dalton Menezes</a></td>
    </tr>
  </tbody>
</table>

# License
[MIT © Dalton Menezes](https://github.com/daltonmenezes/aura-theme/blob/main/LICENSE)
