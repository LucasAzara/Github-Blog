import { ReactNode } from 'react'
import { blog, user, post } from '../lib/axios'

// Interface
// ---------------------------------------------------------------------------
// Github Profile
export interface IProfile {
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
export interface IBlog {
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
export interface IPost {
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
export interface IBlogContextProvider {
  profile: IProfile | undefined
  blogPosts: IBlog[]
  getPost: (url: string) => Promise<IPost>
  getGithubPosts: (search: string) => Promise<void>
}

export interface IBlogContextProviderProps {
  children: ReactNode
}

// ---------------------------------------------------------------------------

export const handleGithubProfileInfo = async (userProle: string) => {
  return await user
    .get(userProle)
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
}

export const handleGithubPostSearch = async (search: string) => {
  return await blog
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
}

export const handleGitHubPostData = async (postLink: string) => {
  return await post
    .get(postLink)
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
