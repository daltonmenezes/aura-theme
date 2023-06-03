{{{ basic-heading }}}

<p align="center">
  <img alt="preview" src="https://camo.githubusercontent.com/91c5c0183e09c112509460cb85b1d87efd937058bf1f5dd6264f68e0b12bd799/68747470733a2f2f692e696d6775722e636f6d2f444637793945682e706e67" />
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
      {{{ author-thead }}}
    </tr>
  </thead>

  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/baliestri">Bruno Sales</a></td>
      {{{ author-tbody }}}
    </tr>
  </tbody>
</table>

{{{ footer }}}
