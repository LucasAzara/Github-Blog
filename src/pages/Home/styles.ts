import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  padding: 32px;
  margin-top: -100px;
  z-index: 0;

  img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
  }
`
