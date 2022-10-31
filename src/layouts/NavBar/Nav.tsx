import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export function Nav() {
  interface PathsTypes {
    key: string
    destination: string
    nameOfPage: string
  }

  const paths: PathsTypes[] = [
    {
      key: 'artists-key',
      destination: '/artists',
      nameOfPage: 'Artists',
    },
    {
      key: 'about-key',
      destination: '/about',
      nameOfPage: 'About us',
    },
    {
      key: 'art-key',
      destination: '/art',
      nameOfPage: 'Art',
    },
    {
      key: 'media-key',
      destination: '/our-media',
      nameOfPage: 'Our media',
    },
    {
      key: 'links-key',
      destination: '/links',
      nameOfPage: 'Links',
    },
  ]

  return (
    <NavList>
      {paths.map(({ key, destination, nameOfPage }) => (
        <Item key={key}>
          <NavLinkStyled to={destination}>{nameOfPage}</NavLinkStyled>
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
  border: 1px solid black;
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
