import styled from 'styled-components'

export const Publications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`
export const Blog = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 16px));
  grid-gap: 32px;
`

export const Posts = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  position: relative;
  padding: 32px;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  a {
    width: 75%;
    display: block;
    color: ${(props) => props.theme['base-title']};
    text-decoration: none;
  }

  .postDate {
    position: absolute;
    top: 42px;
    right: 32px;
  }
`
export const SearchBar = styled.form`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;

    h3 {
      color: ${(props) => props.theme['base-title']};
    }

    p {
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    width: 100%;
    border-radius: 8px;
    padding: 12px;
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
`
