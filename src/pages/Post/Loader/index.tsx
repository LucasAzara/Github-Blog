// Context
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
// Spinner for Loading
import { Oval } from 'react-loader-spinner'
// CSS
import { PostBlur, PostLoader } from './styles'
// Interface
import { IPost } from '../../../contexts/BlogContentActions'

interface ILoader {
  post: IPost | undefined
}

export function Loader({ post }: ILoader) {
  // Theme Data
  const { blue } = useContext(ThemeContext)

  return (
    <>
      <PostLoader className={post ? 'none' : ''}>
        <PostBlur />
        <Oval
          height={150}
          width={150}
          color={blue}
          wrapperStyle={{}}
          wrapperClass=""
          visible={!post}
          ariaLabel="oval-loading"
          secondaryColor={blue}
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </PostLoader>
    </>
  )
}
