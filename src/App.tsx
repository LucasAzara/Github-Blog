// Context
import { ThemeProvider } from 'styled-components'
import { BlogContext } from './contexts/BlogContext'
// Pages
import { Home } from './pages/Home'
// Layout
import { DefaultLayout } from './layout/DefaultLayout'
// Global Style
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    // Theme Values
    <ThemeProvider theme={defaultTheme}>
      {/* Context Values */}
      <BlogContext>
        {/* Pages */}
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </BlogContext>
      {/* Global Style */}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
