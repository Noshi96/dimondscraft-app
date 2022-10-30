import styled from 'styled-components/macro'

export function Logo() {
  return (
    <Wrapper>
      <Image
        src='https://diamondscraft.io/wp-content/uploads/2022/03/diamondslogo.png'
        loading='lazy'
        alt='logo_diamondscraft'
      />
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
