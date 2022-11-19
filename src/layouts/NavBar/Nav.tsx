import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { PathsTypes } from './model'

const scrollToEntrySection = (scrollHook: 'entryPageStartHook' | 'entryPageEndHook'): void => {
  setTimeout(() => {
    const element = document.getElementById(scrollHook) as HTMLElement;
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
  }, 300)
}

const Nav = () => {
  const paths: PathsTypes[] = [
    {
      key: 'home',
      destination: '/',
      nameOfPage: 'Strona główna',
      exact: true,
      scrollHook: 'entryPageStartHook',
    },
    {
      key: 'about',
      destination: '/about',
      nameOfPage: 'O nas',
      scrollHook: 'entryPageEndHook',
    },
    {
      key: 'contact',
      destination: '/contact',
      nameOfPage: 'Kontakt',
      scrollHook: 'entryPageEndHook',
    },
  ]

  return (
    <NavList>
      {paths.map(({ key, destination, nameOfPage, exact, scrollHook }) => (
        <Item key={key}>
          <NavLinkStyled end={exact} to={destination} onClick={() => scrollToEntrySection(scrollHook)}>
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
  font-size: 1.1rem;
  transition: all 0.4s;

  &:link,
  &:visited {
    color: #ffffff;
  }
  &:hover,
  &:active {
    background-color: #2c1b96;
    color: #ffaa00;
  }

  &.active {
    background-color: #2c1b96;
    color: #ffaa00;
  }
`

export default Nav
