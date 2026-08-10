tailwind.config = {
  theme: {
    extend: {
      colors: {
        cozy: {
          bg: '#F1F5DC',                // Page Background
          card: '#FFFFFF',              // Card Surface
          text: '#2C221E',              // Dark Espresso Text
          muted: '#6E6A66',             // Muted Text
          olivegreen: '#8F9B5F',        // Primary Button & Accent Color
          'olivegreen-hover': '#7E8952',// Button Hover Color
          sage: '#8A9A86',
          'sage-light': 'rgba(138, 154, 134, 0.15)',
          honey: '#EBB059',
          border: 'rgba(110, 99, 91, 0.12)'
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        'cozy': '20px',
      }
    }
  }
}