import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  padding: 32px;
  z-index: 0;

  position: relative;

  img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
  }

  a {
    position: absolute;
    right: 32px;

    display: flex;
    gap: 8px;
    align-items: center;

    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const ProfileBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    color: ${(props) => props.theme['base-title']};
  }
  h4 {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileStats = styled.div`
  display: flex;
  display: row;
  gap: 24px;
  flex-grow: 1;
  align-items: end;

  div {
    display: flex;
    display: row;
    gap: 8px;
    align-items: center;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
