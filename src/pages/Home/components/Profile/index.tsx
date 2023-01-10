// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
// Context
import { useContext } from 'react'
import { useContextSelector } from 'use-context-selector'
import { BlogProvider } from '../../../../contexts/BlogContext'
// CSS
import { ProfileContainer, ProfileBio, ProfileStats } from './styles'

export function Profile() {
  // Profile Info from Github API
  const profile = useContextSelector(BlogProvider, (context) => {
    return context.profile
  })

  return (
    <ProfileContainer>
      <img src={profile?.avatar} alt="" />
      <ProfileBio>
        <h1>{profile?.name}</h1>
        <h4>{profile?.bio}</h4>
        <ProfileStats>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{profile?.userName}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{profile?.company}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{profile?.followers} followers</p>
          </div>
        </ProfileStats>
      </ProfileBio>
      <a href={profile?.url} target="_blank" rel="noreferrer">
        GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
      </a>
    </ProfileContainer>
  )
}
