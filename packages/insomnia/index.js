const colors = {
  accent1: '#dbdbdb',
  accent2: '#1c1b22',
  accent3: '#9d7de0',
  accent4: '#67c9a8',
  accent5: '#d8c56f',
  accent6: '#d46a6a',
  accent7: '#cf70bf',
  accent8: '#0f0f0f',
  accent9: '#3b334b',
}

module.exports.themes = [
  {
    name: 'aura-theme',
    displayName: 'Aura Theme',
    theme: {
      foreground: {
        default: colors.accent1,
      },
      background: {
        default: colors.accent2,
        success: colors.accent3,
        notice: colors.accent4,
        warning: colors.accent5,
        danger: colors.accent6,
        surprise: colors.accent4,
        info: colors.accent7,
      },
      rawCss: `
      .react-tabs .react-tabs__tab .bubble {
        background: ${colors.accent3};
        color: ${colors.accent8};
      }

      .dropdown__list ul li:hover {
        background: ${colors.accent9};
      }
    `,
      highlight: {
        xs: colors.accent9,
        md: colors.accent8,
        lg: colors.accent3,
        xl: colors.accent9,
      },
    },
  },
]
