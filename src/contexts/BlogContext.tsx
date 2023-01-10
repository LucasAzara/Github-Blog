// React
import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  handleGitHubPostData,
  handleGithubPostSearch,
  handleGithubProfileInfo,
  IBlog,
  IBlogContextProvider,
  IBlogContextProviderProps,
  IProfile,
} from './BlogContentActions'

// Context Selector Create Context
export const BlogProvider = createContext({} as IBlogContextProvider)

// ---------------------------------------------------------------------------

// Main
export function BlogContext({ children }: IBlogContextProviderProps) {
  const [profile, setProfile] = useState<IProfile>()
  const [blogPosts, setBlogPosts] = useState<IBlog[]>([])

  const getProfileInfo = async (profile: string = 'LucasAzara') => {
    const userProfile = `/users/${profile}`

    const githubInfo = await handleGithubProfileInfo(userProfile)
    setProfile(githubInfo)
  }

  const getGithubPosts = async (
    search: string = 'repo:LucasAzara/Github-Blog',
  ) => {
    const searchValue = search + 'repo:LucasAzara/Github-Blog'

    const githubPosts = await handleGithubPostSearch(searchValue)

    setBlogPosts(githubPosts)
  }

  const getPost = async (postId: string) => {
    const postApiLink = `/LucasAzara/Github-Blog/issues/${postId}`

    return await handleGitHubPostData(postApiLink)
  }

  useEffect(() => {
    getProfileInfo()
    getGithubPosts('')
  }, [])

  return (
    <BlogProvider.Provider
      value={{
        profile,
        blogPosts,
        getPost,
        getGithubPosts,
      }}
    >
      {children}
    </BlogProvider.Provider>
  )
}
