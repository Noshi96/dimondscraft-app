import styled from 'styled-components'
import { Header3 } from '../layouts/Header3';
import { NavLink } from 'react-router-dom'
import { Layout } from '../../../styles/breakpoints'

const NavigationMenu = () => {
    return (
        <Container>
            <Header3> Menu: </Header3>
            <NavigationWrapper>
                <LinksColumn>
                    <NavLinkStyled to={'/'}> {'Strona główna'.toUpperCase()} </NavLinkStyled>
                </LinksColumn>
                <LinksColumn>
                    <NavLinkStyled to={'/artists'}> {'Media'.toUpperCase()} </NavLinkStyled>
                </LinksColumn>
                <LinksColumn>
                    <NavLinkStyled to={'/art'}> {'O nas'.toUpperCase()} </NavLinkStyled>
                </LinksColumn>
            </NavigationWrapper>
        </Container>
    )
}

export default NavigationMenu;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #ffffff;
  margin-bottom: 1rem;
  min-height: 100px;

  @media only screen and ${Layout.laptop} {
    flex-direction: row;
  }
`

const NavigationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem 1rem;

  @media only screen and ${Layout.laptop} {
    margin: 1rem 0 0 1rem;
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
  transition: all .3s ease-in-out;
  font-size: 14px;
  box-sizing: border-box;
  padding: 4px 4px;

  &:hover {
    background: #ffffff11;
  }
  
  &.active {
    background-color: #ffffff;
    color: #22192f;
  }
`
