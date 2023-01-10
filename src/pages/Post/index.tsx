// Use Parameter from Router
import { NavLink, useParams } from 'react-router-dom'
// Context
import { useContext, useEffect, useState } from 'react'
import { BlogProvider, IPost } from '../../contexts/BlogContext'
// CSS
import {
  PostBlur,
  PostContainer,
  PostContent,
  PostLoader,
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
// Loader Spinner
import { Oval } from 'react-loader-spinner'
import { ThemeContext } from 'styled-components'

export function Post() {
  const [post, setPost] = useState<IPost>()

  const { postId } = useParams()

  // BlogPosts
  const { getPost } = useContext(BlogProvider)

  // Theme Data
  const themeColors = useContext(ThemeContext)

  // Get Post Data
  useEffect(() => {
    async function handleGetPost() {
      const postData = await getPost(postId!)
      setPost(postData)
    }
    handleGetPost()
  }, [getPost, postId])

  // Variable for Post Date
  let timeDifference

  if (post) timeDifference = differenceInDays(new Date(), new Date(post?.date!))

  return (
    <PostContainer>
      <PostLoader className={post ? 'none' : ''}>
        <PostBlur />
        <Oval
          height={150}
          width={150}
          color={themeColors.blue}
          wrapperStyle={{}}
          wrapperClass=""
          visible={!post}
          ariaLabel="oval-loading"
          secondaryColor={themeColors.blue}
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </PostLoader>
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
