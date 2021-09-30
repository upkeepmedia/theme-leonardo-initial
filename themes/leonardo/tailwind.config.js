module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend:{
        fontFamily:{
          heading: ['Raleway', 'sans-serif']
        },
        colors:{
          primary: 'green',
          secondary: 'gray',
          heading: 'gray',
          accent: 'green'
        } 
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
  