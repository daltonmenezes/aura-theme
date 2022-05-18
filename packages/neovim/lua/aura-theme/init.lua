local aura = {}
local core = require("aura-theme.common.core")

function aura.setupTheme(pattern)
  vim.o.termguicolors = true
  vim.o.background = "dark"
  vim.g.colors_name = pattern

  local palette = core.createPaletteByPattern(pattern)

  core.createTheme(palette)
end

return aura
