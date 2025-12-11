import './index.css'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:['var(--body-font)']
      },
        colors: {
            dark: "#1b1b1b",
            light: "#f5f5f5",
        },
        animation: {
            'spin-slow': 'spin 8s linear infinite'
        },
        backgroundImage: {
            circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);'
        }
    },
  },
  plugins: [],
}