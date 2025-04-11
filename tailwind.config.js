/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme (Solarized-inspired)
        dark: {
          background: '#002b36',   // Solarized base03
          text: '#93a1a1',         // Solarized base0
          heading: '#fdf6e3',      // Solarized base3
          secondary: '#839496',    // Solarized base1
          muted: '#586e75',        // Solarized base01
          border: '#073642',       // Solarized base02
        },
      
        light: {
          background: '#f5f5f5',  // Very light grey, comfortable on the eyes
          text: '#333333',         // Rich black for body text
          heading: '#1e1e1e',      // Darker for contrast in headings
          secondary: '#5a5a5a',    // Milder grey for subtext
          muted: '#767676',        // Muted tone for meta or comments
          border: '#e2e2e2'        // Subtle divider lines
        },
        
      
        // Common colors
        accent: '#FF4F9D',
        'link-hover': '#6EE7FF',
      },
      
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      spacing: {
        'section': '80px',
      },
      maxWidth: {
        'content': '960px',
      },
    },
  },
  plugins: [],
} 