// Background Image
import background from '../../assets/Cover.png'
import Icon from '../../assets/githubBlogIcon.svg'
// CSS
import { HeaderContainer, HeaderTitle } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={background} alt="" />
      <HeaderTitle>
        <img src={Icon} alt=">_" />
        <h1>GITHUB BLOG</h1>
      </HeaderTitle>
    </HeaderContainer>
  )
}
