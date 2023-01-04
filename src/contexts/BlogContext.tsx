// axios
import { blog, user, post } from '../lib/axios'
// React
import { createContext, ReactNode, useEffect, useState } from 'react'

// Interface
// ---------------------------------------------------------------------------
// Github Profile
interface IProfile {
  avatar: string
  userName: string
  name: string
  company: string
  followers: string
  url: string
  bio: string
}

interface IProfileData {
  avatar_url: string
  login: string
  name: string
  company: string
  followers: string
  html_url: string
  bio: string
}
// ---------------------------------------------------------------------------
// Blog Post Preview
interface IBlog {
  link: string
  title: string
  lastUpdate: string
  body: string
}

interface IBlogData {
  url: string
  title: string
  updated_at: string
  body: string
}
// ---------------------------------------------------------------------------
// Posts
interface IPost {
  title: string
  user: string
  date: string
  comments: number
  body: string
  url: string
}

interface IPostData {
  title: string
  user: {
    login: string
  }
  updated_at: string
  comments: number
  body: string
  html_url: string
}
// ---------------------------------------------------------------------------
// Context
interface IBlogContextProvider {
  profile: IProfile | undefined
  blogPosts: IBlog[]
  getPost: (url: string) => Promise<IPost>
}

interface IBlogContextProviderProps {
  children: ReactNode
}

// ---------------------------------------------------------------------------

// Context Selector Create Context
export const BlogProvider = createContext({} as IBlogContextProvider)

// ---------------------------------------------------------------------------

// Main
export function BlogContext({ children }: IBlogContextProviderProps) {
  const [profile, setProfile] = useState<IProfile>()
  const [blogPosts, setBlogPosts] = useState<IBlog[]>([])

  const getProfileInfo = async (profile: string = 'LucasAzara') => {
    const githubInfo = await user
      .get(`/users/${profile}`)
      .then((res) => res.data)
      .then((data: IProfileData): IProfile => {
        return {
          avatar: data.avatar_url,
          userName: data.login,
          name: data.name,
          company: data.company,
          followers: data.followers,
          url: data.html_url,
          bio: data.bio,
        }
      })
    setProfile(githubInfo)
  }

  const getGithubPosts = async (
    search: string = 'repo:LucasAzara/Github-Blog',
  ) => {
    const githubPosts = await blog
      .get('', { params: { q: search } })
      .then((res) => res.data.items)
      .then((items: IBlogData[]): IBlog[] => {
        return items.map((item) => {
          return {
            title: item.title,
            body: item.body,
            lastUpdate: item.updated_at,
            link: item.url,
          }
        })
      })

    setBlogPosts(githubPosts)
  }

  const getPost = async (url: string = '/LucasAzara/Github-Blog/issues/1') => {
    return await post
      .get(url)
      .then((res) => res.data)
      .then((data: IPostData): IPost => {
        return {
          title: data.title,
          body: data.body,
          comments: data.comments,
          date: data.updated_at,
          user: data.user.login,
          url: data.html_url,
        }
      })
  }

  useEffect(() => {
    getProfileInfo()
    getGithubPosts()
  }, [])

  return (
    <BlogProvider.Provider value={{ profile, blogPosts, getPost }}>
      {children}
    </BlogProvider.Provider>
  )
}
