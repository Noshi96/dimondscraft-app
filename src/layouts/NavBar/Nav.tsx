import styled from 'styled-components/macro'
import { NavLink, useLocation } from 'react-router-dom'

export function Nav() {
  const pagesPaths = ['/artists', '/about', '/art', '/our-media', '/links']
  const location = useLocation()
  console.log(location)
  return (
    <Wrapper>
      <NavList>
        {pagesPaths.map((path) => (
          <Item key={path}>
            <NavLinkStyled to={path}>
              {path.slice(1).replaceAll('-', ' ')}
            </NavLinkStyled>
          </Item>
        ))}
      </NavList>
    </Wrapper>
  )
}

const Wrapper = styled.nav``
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  list-style-type: none;
`

const Item = styled.li`
  border: 1px solid black;
  cursor: pointer;
`

const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  text-decoration: none;
  padding: 2rem 2rem;
  font-size: 1.1rem;
  &:link,
  &:visited {
    color: #70004b;
  }
  &:hover,
  &:active {
    color: #ffaa00;
  }

  &.active {
    color: #ffaa00;
  }
`
// const Item = styled.a`
//   text-transform: uppercase;
//   text-decoration: none;
//   display: flex;
//   padding: 0.25rem 1rem;
//   font-size: 1rem;
//   font-weight: 600;
//   align-items: center;
//   color: #000000;
//   cursor: pointer;

//   &:hover {
//     opacity: 0.8;
//   }

//   &:active {
//     opacity: 0.4;
//   }

//   .icon {
//     margin-right: 0.25rem;
//   }
// `
