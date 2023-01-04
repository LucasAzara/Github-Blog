// CSS
import { HomeContainer } from './styles'
// Components
import { Profile } from './components/Profile'
import { BlogPosts } from './components/BlogPosts'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <BlogPosts />
    </HomeContainer>
  )
}
