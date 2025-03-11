export default defineAppConfig({
  ui: {
    colors: {
      primary: 'reactmos-blue',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    }
  },
  seo: {
    siteName: 'Reactmos - Build React SPAs with modules'
  },
  header: {
    title: 'Reactmos',
    to: '/',
    logo: {
      alt: '',
      light: '/light.png',
      dark: '/dark.png'
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/igorjacauna/reactmos',
      target: '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/igorjacauna/reactmos',
      target: '_blank',
      'aria-label': 'Reactmos on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/igorjacauna/reactmos/docs/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/igorjacauna/reactmos',
        target: '_blank'
      }]
    }
  }
})
