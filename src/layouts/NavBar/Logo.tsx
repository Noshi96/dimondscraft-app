import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export function Logo() {
  return (
    <Wrapper>
      <NavLink to='/'>
        <Image
          src='https://diamondscraft.io/wp-content/uploads/2022/03/diamondslogo.png'
          loading='lazy'
          alt='logo_diamondscraft'
        />
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
