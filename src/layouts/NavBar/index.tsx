import styled from 'styled-components/macro'
import Logo from './Logo'
import { PageWrapper } from '../PageWrapper'
import Drawer from '../Drawer'

const NavBar = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <Drawer />
      </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 5rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  color: #ffffff;
  z-index: 12;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default NavBar
