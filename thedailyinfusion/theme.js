tailwind.config = {
  theme: {
    extend: {
      colors: {
        cozy: {
          bg: '#F1F5DC',
          card: '#FFFFFF',
          text: '#2C221E',
          muted: '#6E6A66',
          olivegreen: '#8F9B5F',
          'olivegreen-hover': '#7E8952',
          sage: '#8A9A86',
          'sage-light': 'rgba(138, 154, 134, 0.15)',
          honey: '#EBB059',
          border: 'rgba(110, 99, 91, 0.12)'
        }
      },
      fontFamily: {
        serif: ['Maghelia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        'cozy': '20px',
      }
    }
  }
}