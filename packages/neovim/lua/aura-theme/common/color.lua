local hsluv = require("aura-theme.common.hsluv")

local color = {}

local foreground = "#ffffff"
local background = "#000000"

local function hexToRGB(hexstr)
  local hex = "[abcdef0-9][abcdef0-9]"
  local pat = "^#(" .. hex .. ")(" .. hex .. ")(" .. hex .. ")$"
  hexstr = string.lower(hexstr)

  assert(string.find(hexstr, pat) ~= nil, "hexToRGB: invalid hexstr: " .. tostring(hexstr))

  local r, g, b = string.match(hexstr, pat)
  return { tonumber(r, 16), tonumber(g, 16), tonumber(b, 16) }
end

function color.blend(fg, bg, alpha)
  bg = hexToRGB(bg)
  fg = hexToRGB(fg)

  local blendChannel = function(i)
    local ret = (alpha * fg[i] + ((1 - alpha) * bg[i]))

    return math.floor(math.min(math.max(0, ret), 255) + 0.5)
  end

  return string.format("#%02X%02X%02X", blendChannel(1), blendChannel(2), blendChannel(3))
end

function color.darken(hex, amount, bg)
  return color.blend(hex, bg or background, math.abs(amount))
end

function color.lighten(hex, amount, fg)
  return color.blend(hex, fg or foreground, math.abs(amount))
end

function color.brighten(colour, percentage)
  local hsl = hsluv.hex_to_hsluv(colour)
  local larpSpace = 100 - hsl[3]

  if percentage < 0 then
    larpSpace = hsl[3]
  end

  hsl[3] = hsl[3] + larpSpace * percentage

  return hsluv.hsluv_to_hex(hsl)
end

return color
