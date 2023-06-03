const colors = {
  accent1: '#edecee',
  accent2: '#15141b',
  accent3: '#a277ff',
  accent4: '#61ffca',
  accent5: '#ffca85',
  accent6: '#ff6767',
  accent7: '#f694ff',
  accent8: '#0f0f0f',
  accent9: '#3b334b',
  accent10: '#0f0f0f',
  accent11: '#000000',
}

module.exports.themes = [
  {
    name: 'aura-theme',
    displayName: 'Aura Theme',

    theme: {
      foreground: {
        default: colors.accent1,
        notice: colors.accent10,
        surprise: colors.accent10,
        warning: colors.accent10,
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
      ::-webkit-scrollbar-track {
        background: ${colors.accent11};
      }

      ::-webkit-scrollbar-thumb {
        background: ${colors.accent3};
      }

      .react-tabs .react-tabs__tab .bubble {
        background: ${colors.accent3};
        color: ${colors.accent8};
      }

      .dropdown__list ul li:hover {
        background: ${colors.accent9};
      }

      .urlbar__send-btn,
      .editor .nunjucks-tag.nunjucks-variable,
      .react-switch-bg svg path,
      .react-switch-handle {
        color: ${colors.accent10} !important;
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
