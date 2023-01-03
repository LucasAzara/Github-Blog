import { useContext } from 'react'
import { BlogProvider } from '../../contexts/BlogContext'
import { HomeContainer } from './styles'

export function Home() {
  const { profile, blogPosts } = useContext(BlogProvider)

  console.log(profile, blogPosts)

  return (
    <HomeContainer>
      <img src={profile?.avatar} alt="" />
      <div>
        <h1>{profile?.name}</h1>
        <h3>{profile?.bio}</h3>
        <p>{profile?.userName}</p>
        <p>{profile?.company}</p>
        <p>{profile?.followers}</p>
      </div>
    </HomeContainer>
  )
}
