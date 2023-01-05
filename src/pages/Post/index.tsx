// Use Parameter from Router
import { useParams } from 'react-router-dom'
// CSS
import { PostContainer } from './styles'

export function Post() {
  const { postId } = useParams()

  return (
    <PostContainer>
      <h1>Post {postId}</h1>
    </PostContainer>
  )
}
