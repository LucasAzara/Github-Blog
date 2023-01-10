import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 0;
`

export const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  padding: 32px;
`

export const PostNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    display: flex;
    gap: 8px;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }
`

export const PostTitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 32px;

    p {
      display: flex;
      gap: 8px;
      align-items: center;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostContent = styled.div`
  padding: 32px;

  h1,
  h3 {
    color: ${(props) => props.theme['base-title']};
    margin: 1rem 0;
  }

  h1 {
    border-bottom: 2px solid ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  img {
    width: 100%;
    margin: 1rem 0;
  }
`
export const PostLoader = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.none {
    display: none;
  }
`
export const PostBlur = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${(props) => props.theme['base-background']};
  opacity: 80%;
`
