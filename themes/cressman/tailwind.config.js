module.exports = {
  purge: {
    enabled: true,
    content: [
      '/var/www/projects/themes/theme-upkeep/templates/**/*.html.twig',
      '/var/www/projects/themes/theme-raphael/templates/**/*.html.twig',
      '/var/www/projects/themes/theme-upkeep/templates/*.html.twig',
      '/var/www/projects/themes/theme-raphael/templates/*.html.twig',
      '/var/www/sites/cressman/user/pages/**/*.md',
      '/var/www/sites/cressman/user/pages/**/**/*.md'
    ],
    options:{
      safelist: ['bg-red-600', 'bg-green-600'],
      extractors: [
        {
          extractor: content => content.match(/[^\.=<>"',`\s]*[^\.=<>"'`,\s:]/g) || [],
          extensions: ['md']
        }
      ]
    }
  },
  theme: {
    extend:{
      fontFamily:{
        heading: ['Raleway', 'serif']
      },
      colors:{
        primary: '#df7401',
        'primary-dark': '#bd6507',
        secondary: '#00599c',
        'secondary-dark': '#074879',
        heading: 'gray-700',
        accent: '#3e4047',
        'gray-800': '#272727',
        'gray-900': '#222222'
      },
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
      backgroundColor: ['odd'],
    },
  },
  plugins: [
  
  ],
}
