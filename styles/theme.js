import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const COLORS = {
  primary: '#00847e',
  primaryBright: '#66fcf1',
  accent: '#45A29E',
  text: '#0b0c10',
  white: '#fff',
  black: '#000',
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.primaryBright,
    },
    error: {
      main: red.A400,
    },
    background: {
      dark: COLORS.black,
      light: '#EFEFEF',
      default: COLORS.white,
    },
    text: {
      brand: COLORS.primary,
      default: COLORS.text,
      inverted: COLORS.white,
    },
  },
  typography: {
    h1: {
      fontSize: '1.8rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
  },
})

export default theme