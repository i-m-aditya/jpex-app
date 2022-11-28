module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        'headingPro': 'Heading Pro Trial',
        'avenir': 'Avenir Next',
        'poppins': 'Poppins',
        'urbanist': 'Urbanist',
        'mouse': 'Mouse Memoirs'
      },
      dropShadow: {
        '3xl': '3px 2px 18px rgba(0, 0, 0, 0.45)',
        '4xl': '3px 2px 18px linear-gradient(265.41deg, #ff45dc -1.68%, #ffd421 45.36%, #9a36ff 94.39%)',
        'cards': '3px 2px 18px rgba(0, 0, 0, 0.45)'
      }
    }
  }
};