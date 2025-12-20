local wezterm = require("wezterm")
local config = wezterm.config_builder()

config.color_schemes = {
	["{{ shortName }} Dark"] = {
		background = "{{ accent12 }}",
		foreground = "{{ accent7 }}",

		cursor_bg = "{{ accent1 }}",

		selection_bg = "{{ accent38 }}",

		ansi = {
			"{{ accent12 }}",
			"{{ accent5 }}",
			"{{ accent2 }}",
			"{{ accent3 }}",
			"{{ accent1 }}",
			"{{ accent1 }}",
			"{{ accent2 }}",
			"{{ accent7 }}",
		},

		brights = {
			"{{ accent8 }}",
			"{{ accent5 }}",
			"{{ accent2 }}",
			"{{ accent3 }}",
			"{{ accent1 }}",
			"{{ accent1 }}",
			"{{ accent2 }}",
			"{{ accent7 }}",
		},
	},
}

return config
