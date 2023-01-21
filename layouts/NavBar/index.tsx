import styled from 'styled-components'
import Logo from './Logo'
import { PageWrapper } from '../PageWrapper'
import Drawer from '../Drawer'
import { useState } from 'react'
import { useChangeStateOnScroll } from '../../hooks/useChangeStateOnScroll'
import { ScrollTypes } from './model'
import { Layout } from '../../styles/breakpoints'

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false)

  useChangeStateOnScroll(setShow, 300)

  return (
    <Wrapper showState={show}>
      <IncomingEvent> 19/01/23 <b>NEXT EVENT!</b> GET YOUR <b> NFT TICKET </b> HERE! </IncomingEvent>
      <PageWrapper>
        <Logo />
        <Drawer />
      </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header<ScrollTypes>`
  height: 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  color: #ffffff;
  z-index: 150;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  transition-timing-function: ease-in;
  transition: 0.5s;
  ${({ showState }) =>
    showState
      ? 'background-color:#000000cc;'
      : 'background-color:transparent;'};

  @media only screen and (${Layout.tablet}) {
    background-color: transparent;
  }
`

const IncomingEvent = styled.div`
  width: 100%;
  background: #ffff00;
  color: #000000;
  min-height: 28px;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  box-sizing: border-box;
  padding: 6px 0;
`


export default NavBar
