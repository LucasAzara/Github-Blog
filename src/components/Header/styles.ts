import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`
export const HeaderTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 5rem;
  }
  h1 {
    color: ${(props) => props.theme.blue};
  }
`
