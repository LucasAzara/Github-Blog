// React Router
import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
// Components
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
        </Route>
      </Routes>
    </ScrollToTop>
  )
}
