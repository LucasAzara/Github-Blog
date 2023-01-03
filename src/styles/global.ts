// Global Styles for Website
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 1px solid ${(props) => props.theme['base-label']};
  }
  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    margin-bottom: 10rem;
  }
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }`
