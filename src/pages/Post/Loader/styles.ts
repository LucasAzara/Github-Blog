import styled from 'styled-components'

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
