const colors = {
  accent1: '{{ accent7 }}',
  accent2: '{{ accent12 }}',
  accent3: '{{ accent1 }}',
  accent4: '{{ accent2 }}',
  accent5: '{{ accent3 }}',
  accent6: '{{ accent5 }}',
  accent7: '{{ accent6 }}',
  accent8: '{{ accent0 }}',
  accent9: '{{ accent23 }}',
  accent10: '{{ accent0 }}',
  accent11: '{{ accent11 }}',
}

module.exports.themes = [
  {
    name: '{{ name }}',
    displayName: '{{ displayName }}',

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
