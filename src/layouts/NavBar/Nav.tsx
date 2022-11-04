import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { PathsTypes } from './model'

const Nav = () => {
  const paths: PathsTypes[] = [
    {
      key: 'home',
      destination: '/',
      nameOfPage: 'Home',
      exact: true,
    },
    {
      key: 'artists',
      destination: '/artists',
      nameOfPage: 'Artists',
    },
    {
      key: 'about',
      destination: '/about',
      nameOfPage: 'About us',
    },
    {
      key: 'art',
      destination: '/art',
      nameOfPage: 'Art',
    },
    {
      key: 'media',
      destination: '/our-media',
      nameOfPage: 'Our media',
    },
    {
      key: 'links',
      destination: '/links',
      nameOfPage: 'Links',
    },
  ]

  return (
    <NavList>
      {paths.map(({ key, destination, nameOfPage, exact }) => (
        <Item key={key}>
          <NavLinkStyled end={exact} to={destination}>
            {nameOfPage}
          </NavLinkStyled>
        </Item>
      ))}
    </NavList>
  )
}

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  list-style-type: none;
  padding-inline-start: 0;
`

const Item = styled.li`
  cursor: pointer;
`

const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.4s;

  &:link,
  &:visited {
    color: #ffffff;
  }
  &:hover,
  &:active {
    background-color: #22192f;
    color: #ffaa00;
  }

  &.active {
    background-color: #22192f;
    color: #ffaa00;
  }
`

export default Nav
