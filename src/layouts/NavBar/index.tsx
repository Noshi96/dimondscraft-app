import styled from 'styled-components/macro'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { PageWrapper } from '../PageWrapper'

export function NavBar() {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 #000000;
  height: 4rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 2;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
