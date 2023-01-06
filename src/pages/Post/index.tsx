// Use Parameter from Router
import { NavLink, useParams } from 'react-router-dom'
// Context
import { useContext, useEffect, useState } from 'react'
import { BlogProvider, IPost } from '../../contexts/BlogContext'
// CSS
import {
  PostContainer,
  PostContent,
  PostNav,
  PostTitle,
  PostTitleInfo,
} from './styles'
// Icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
// Date Format
import { differenceInDays } from 'date-fns'
// React Markdown
import ReactMarkdown from 'react-markdown'

export function Post() {
  const [post, setPost] = useState<IPost>()

  const { postId } = useParams()

  // BlogPosts
  const { getPost } = useContext(BlogProvider)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    async function handleGetPost() {
      const postData = await getPost(postId!)
      setPost(postData)
    }
    handleGetPost()
  }, [getPost, postId])

  let timeDifference

  if (post) {
    timeDifference = differenceInDays(new Date(), new Date(post?.date!))
  }

  return (
    <PostContainer>
      <PostTitle>
        <PostNav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <a href={post ? post.url : ''} target="_blank" rel="noreferrer">
            Ver no Github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </PostNav>
        <PostTitleInfo>
          <h1>{post?.title}</h1>
          <div>
            <p>
              <FontAwesomeIcon icon={faGithub} />
              {post?.user}
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há {timeDifference} dia(s)
            </p>
            <p>
              <FontAwesomeIcon icon={faComment} />
              {post?.comments} comentários
            </p>
          </div>
        </PostTitleInfo>
      </PostTitle>
      <PostContent>
        <ReactMarkdown>{post ? post.body : ''}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
