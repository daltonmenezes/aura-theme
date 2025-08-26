local wezterm = require("wezterm")
local config = wezterm.config_builder()

config.color_schemes = {
	["Aura Dark"] = {
		background = "#15141b",
		foreground = "#edecee",

		cursor_bg = "#a277ff",

		selection_bg = "#3d375e7f",

		ansi = {
			"#15141b",
			"#ff6767",
			"#61ffca",
			"#ffca85",
			"#a277ff",
			"#a277ff",
			"#61ffca",
			"#edecee",
		},

		brights = {
			"#6d6d6d",
			"#ff6767",
			"#61ffca",
			"#ffca85",
			"#a277ff",
			"#a277ff",
			"#61ffca",
			"#edecee",
		},
	},
}

return config
