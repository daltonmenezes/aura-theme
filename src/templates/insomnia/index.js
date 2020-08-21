const colors = {
  accent1: '$accent7',
  accent2: '$accent12',
  accent3: '$accent1',
  accent4: '$accent2',
  accent5: '$accent3',
  accent6: '$accent5',
  accent7: '$accent6',
  accent8: '$accent0',
  accent9: '$accent23',
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
