import styled, { css } from 'styled-components'
import { Layout } from '../../../styles/breakpoints'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLink {
  path: string
  pathto: string
}

const NavigationMenu = () => {
  const { asPath } = useRouter()

  const smoothNavigate = () => {
    setTimeout(() => {
      const element = document.getElementById(
        'entryPageStartHook'
      ) as HTMLElement
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      })
    }, 300)
  }

  return (
    <Container>
      <NavigationWrapper>
        <LinksColumn>
          <NavLinkStyled
            path={asPath}
            pathto={'/'}
            href={'/'}
            onClick={smoothNavigate}
          >
            {' '}
            {'Strona główna'.toUpperCase()}{' '}
          </NavLinkStyled>
        </LinksColumn>
        <LinksColumn>
          <NavLinkStyled
            path={asPath}
            pathto={'/about'}
            href={'/about'}
            onClick={smoothNavigate}
          >
            {' '}
            {'O nas'.toUpperCase()}{' '}
          </NavLinkStyled>
        </LinksColumn>
        <LinksColumn>
          <NavLinkStyled
            path={asPath}
            pathto={'/gallery'}
            href={'/gallery'}
            onClick={smoothNavigate}
          >
            {' '}
            {'Galeria'.toUpperCase()}{' '}
          </NavLinkStyled>
        </LinksColumn>
        <LinksColumn>
          <NavLinkStyled
            path={asPath}
            pathto={'/contact'}
            href={'/contact'}
            onClick={smoothNavigate}
          >
            {' '}
            {'Kontakt'.toUpperCase()}{' '}
          </NavLinkStyled>
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
  flex-wrap: wrap;
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

const NavLinkStyled = styled(Link)<ActiveLink>`
  background: transparent;
  color: #aeaeae;
  border: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  box-sizing: border-box;
  padding: 6px 8px;

  &:visited {
    color: #aeaeae;
  }

  ${({ pathto, path }) =>
    pathto === path &&
    css`
      background: #ffffff !important;
      &:visited {
        color: #22192f;
      }
    `}

  &:hover {
    background: #ffffff11;
  }
`
