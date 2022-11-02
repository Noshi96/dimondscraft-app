import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/diamondslogo.png'

const Logo = () => {
  return (
    <Wrapper>
      <NavLink to='/'>
        <Image src={logoImg} loading='lazy' alt='logo_diamondscraft' />
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  height: 4rem;
`
export default Logo
