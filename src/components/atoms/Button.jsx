import styled, {css} from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #282c34;
  color: #282c34;
  margin: 0 1rem;
  padding: 0.25rem 0.5rem;
  width: 150px;

  ${props => props.primary && css`
    background: #282c34;
    color: white;
  `}
`

export default Button
