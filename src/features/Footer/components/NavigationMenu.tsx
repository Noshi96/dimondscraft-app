import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Layout } from '../../../styles/breakpoints'

const NavigationMenu = () => {
  const smoothNavigate = () => {
    setTimeout(() => {
      const element = document.getElementById('entryPageEndHook') as HTMLElement;
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    }, 300)
  }

  return (
    <Container>
      <NavigationWrapper>
        <LinksColumn>
          <NavLinkStyled end={true} to={'/'} onClick={smoothNavigate}>
            {' '}
            {'Strona główna'.toUpperCase()}{' '}
          </NavLinkStyled>
        </LinksColumn>
        <LinksColumn>
          <NavLinkStyled to={'/about'} onClick={smoothNavigate}> {'O nas'.toUpperCase()} </NavLinkStyled>
        </LinksColumn>
        <LinksColumn>
          <NavLinkStyled to={'/contact'} onClick={smoothNavigate}> {'Kontakt'.toUpperCase()} </NavLinkStyled>
        </LinksColumn>
      </NavigationWrapper>
    </Container>
  )
}

export default NavigationMenu

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #ffffff;
  margin-bottom: 1rem;
`

const NavigationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem 1rem;

  @media only screen and (${Layout.laptop}) {
    margin: 8rem 0 0 0;
  }
`

const LinksColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`

const NavLinkStyled = styled(NavLink)`
  background: transparent;
  color: #aeaeae;
  border: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  box-sizing: border-box;
  padding: 6px 8px;

  &:hover {
    background: #ffffff11;
  }

  &.active {
    background-color: #ffffff;
    color: #22192f;
  }
`
