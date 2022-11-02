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
  box-shadow: 0 1px 0 0 #000000;
  height: 5rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #090119;
  color: #ffffff;
  z-index: 2;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default NavBar
