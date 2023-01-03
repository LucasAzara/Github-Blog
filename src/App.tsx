import { useEffect } from 'react'
import { blog, user, post } from './lib/axios'

// Interface
// ---------------------------------------------------------------------------
interface IProfile {
  avatar: string
  userName: string
  name: string
  company: string
  followers: string
  url: string
}

interface IProfileData {
  avatar_url: string
  login: string
  name: string
  company: string
  followers: string
  url: string
}
// ---------------------------------------------------------------------------
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
function App() {
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
          url: data.url,
        }
      })
    console.log(githubInfo)
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

    console.log(githubPosts)
  }

  const getPost = async (url: string = '/LucasAzara/Github-Blog/issues/1') => {
    const postInfo = await post
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

    console.log(postInfo)
  }

  useEffect(() => {
    getProfileInfo()
    getGithubPosts()
    getPost()
  }, [])

  return (
    <>
      <h1>Github Blog</h1>
    </>
  )
}

export default App
