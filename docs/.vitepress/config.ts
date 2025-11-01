export default {
  title: 'Cognispace Docs',
  description: 'Vault • Ledger • Framework',

  // important for custom domain + correct routing
  base: '/', 

  // keep output where the GH Action expects it
  outDir: './.vitepress/dist',

  // add CSP and canonical link
  head: [
    ['meta', { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
    ['link', { rel: 'canonical', href: 'https://docs.cogni.space/' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vault', link: '/vault/' },
      { text: 'Ledger', link: '/ledger/' },
      { text: 'Framework', link: '/framework/' }
    ],
    sidebar: {
      '/vault/': [
        { text: 'Vault', items: [{ text: 'Overview', link: '/vault/' }] }
      ],
      '/ledger/': [
        { text: 'Ledger', items: [{ text: 'Overview', link: '/ledger/' }] }
      ],
      '/framework/': [
        { text: 'Framework', items: [{ text: 'Overview', link: '/framework/' }] }
      ],
      '/': [{ text: 'Getting Started', link: '/' }]
    }
  }
}
