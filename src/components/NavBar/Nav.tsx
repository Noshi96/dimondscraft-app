import styled from 'styled-components/macro'

export function Nav() {
  return (
    <Wrapper>
      <Item>O nas</Item>
      <Item>projekty</Item>
      <Item>Change to navLinks</Item>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`

const Item = styled.a`
  text-transform: uppercase;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`
