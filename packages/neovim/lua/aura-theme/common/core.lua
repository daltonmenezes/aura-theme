local core = {}

function core.createHighlightCommands(groups)
  local commands = {}

  for group, styles in pairs(groups) do
    local gui = styles.gui and "gui=" .. styles.gui or "gui=NONE"
    local fg = styles.fg and "guifg=" .. styles.fg or "guifg=NONE"
    local bg = styles.bg and "guibg=" .. styles.bg or "guibg=NONE"
    local sp = styles.sp and "guisp=" .. styles.sp or ""

    local hl = nil

    if sp ~= "" then
      hl = "highlight " .. group .. " " .. gui .. " " .. fg .. " " .. bg .. " " .. sp
    else
      hl = "highlight " .. group .. " " .. gui .. " " .. fg .. " " .. bg
    end

    table.insert(commands, hl)
  end

  return commands
end

function core.createPaletteByPattern(pattern)
  local palette = require("aura-theme.common.palette")

  local function normalizeHex(hex)
    return string.sub(hex, 1, 7)
  end

  if pattern == "aura-dark" then
    palette.purple = normalizeHex("#a277ff")
    palette.green = normalizeHex("#61ffca")
    palette.orange = normalizeHex("#ffca85")
    palette.red = normalizeHex("#ff6767")
    palette.pink = normalizeHex("#f694ff")
    palette.white = normalizeHex("#edecee")
    palette.gray = normalizeHex("#6d6d6d")
    palette.black = normalizeHex("#15141b")
    palette.purple_faded = normalizeHex("#3d375e7f")
    palette.blue = normalizeHex("#82e2ff")
  elseif pattern == "aura-dark-soft-text" then
    palette.purple = normalizeHex("#8464c6")
    palette.green = normalizeHex("#54c59f")
    palette.orange = normalizeHex("#c7a06f")
    palette.red = normalizeHex("#c55858")
    palette.pink = normalizeHex("#c17ac8")
    palette.white = normalizeHex("#bdbdbd")
    palette.gray = normalizeHex("#6d6d6d")
    palette.black = normalizeHex("#15141b")
    palette.purple_faded = normalizeHex("#3d375e7f")
    palette.blue = normalizeHex("#6cb2c7")
  elseif pattern == "aura-soft-dark" then
    palette.purple = normalizeHex("#a277ff")
    palette.green = normalizeHex("#61ffca")
    palette.orange = normalizeHex("#ffca85")
    palette.red = normalizeHex("#ff6767")
    palette.pink = normalizeHex("#f694ff")
    palette.white = normalizeHex("#edecee")
    palette.gray = normalizeHex("#6d6d6d")
    palette.black = normalizeHex("#21202e")
    palette.purple_faded = normalizeHex("#3d375e7f")
    palette.blue = normalizeHex("#82e2ff")
  elseif pattern == "aura-soft-dark-soft-text" then
    palette.purple = normalizeHex("#8464c6")
    palette.green = normalizeHex("#54c59f")
    palette.orange = normalizeHex("#c7a06f")
    palette.red = normalizeHex("#c55858")
    palette.pink = normalizeHex("#c17ac8")
    palette.white = normalizeHex("#bdbdbd")
    palette.gray = normalizeHex("#6d6d6d")
    palette.black = normalizeHex("#21202e")
    palette.purple_faded = normalizeHex("#3d375e7f")
    palette.blue = normalizeHex("#6cb2c7")
  end

  return palette
end

function core.createAuraPattern(palette)
  return {
    Foreground = { fg = palette.white },
    ForegroundBold = { fg = palette.white, gui = "bold" },
    ForegroundUnderline = { fg = palette.white, sp = palette.white },
    Background = { fg = palette.black },
    BackgroundBold = { fg = palette.black, gui = "bold" },
    BackgroundUnderline = { fg = palette.black, sp = palette.black },

    Gray = { fg = palette.gray },
    Red = { fg = palette.red },
    RedBold = { fg = palette.red, gui = "bold" },
    Green = { fg = palette.green },
    GreenBold = { fg = palette.green, gui = "bold" },
    Blue = { fg = palette.blue },
    BlueBold = { fg = palette.blue, gui = "bold" },
    Purple = { fg = palette.purple },
    PurpleBold = { fg = palette.purple, gui = "bold" },
    PurpleFaded = { fg = palette.purple_faded },
    PurpleFadedBold = { fg = palette.purple_faded, gui = "bold" },
    Orange = { fg = palette.orange },
    OrangeBold = { fg = palette.orange, gui = "bold" },
    Pink = { fg = palette.pink },
    PinkBold = { fg = palette.pink, gui = "bold" },

    RedSign = { fg = palette.red, bg = palette.black, gui = "inverse" },
    GreenSign = { fg = palette.green, bg = palette.black, gui = "inverse" },
    BlueSign = { fg = palette.blue, bg = palette.black, gui = "inverse" },
    PurpleSign = { fg = palette.purple, bg = palette.black, gui = "inverse" },
    PurpleFadedSign = { fg = palette.purple_faded, bg = palette.black, gui = "inverse" },
    OrangeSign = { fg = palette.orange, bg = palette.black, gui = "inverse" },
    PinkSign = { fg = palette.pink, bg = palette.black, gui = "inverse" },

    RedUnderline = { fg = palette.red, gui = "undercurl", sp = palette.red },
    GreenUnderline = { fg = palette.green, gui = "undercurl", sp = palette.green },
    BlueUnderline = { fg = palette.blue, gui = "undercurl", sp = palette.blue },
    PurpleUnderline = { fg = palette.purple, gui = "undercurl", sp = palette.purple },
    PurpleFadedUnderline = { fg = palette.purple_faded, gui = "undercurl", sp = palette.purple_faded },
    OrangeUnderline = { fg = palette.orange, gui = "undercurl", sp = palette.orange },
    PinkUnderline = { fg = palette.pink, gui = "undercurl", sp = palette.pink },
  }
end

function core.createGroups(palette)
  local util = require("aura-theme.common.util")
  local groups = {}
  local pattern = core.createAuraPattern(palette)

  util.mergeTo(groups, require("aura-theme.groups.editor").create(palette, pattern))
  util.mergeTo(groups, require("aura-theme.groups.languages").create(palette, pattern))
  util.mergeTo(groups, require("aura-theme.groups.treesitter").create(palette, pattern))

  return groups
end

function core.createTheme(palette)
  local color = require("aura-theme.common.color")

  vim.g.terminal_color_0 = palette.black
  vim.g.terminal_color_8 = color.darken(palette.black, 0.4)

  vim.g.terminal_color_1 = palette.red
  vim.g.terminal_color_9 = palette.red

  vim.g.terminal_color_2 = palette.green
  vim.g.terminal_color_10 = palette.green

  vim.g.terminal_color_3 = palette.orange
  vim.g.terminal_color_11 = palette.orange

  vim.g.terminal_color_4 = palette.blue
  vim.g.terminal_color_12 = palette.blue

  vim.g.terminal_color_5 = palette.purple
  vim.g.terminal_color_13 = palette.purple

  vim.g.terminal_color_6 = palette.blue
  vim.g.terminal_color_14 = palette.blue

  vim.g.terminal_color_7 = palette.white
  vim.g.terminal_color_15 = palette.white

  local groups = core.createGroups(palette)
  local commands = core.createHighlightCommands(groups)

  vim.api.nvim_command("hi clear")

  if vim.fn.exists("syntax_on") then
    vim.api.nvim_command("syntax reset")
  end

  for i = 1, #commands do
    vim.cmd(commands[i])
  end
end

return core
