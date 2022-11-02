import styled from 'styled-components'
import { Button } from '../../../layouts/Button/Button'

interface Props {
  imgSrc: string
  alt: string
}

const SingleEvent = ({ imgSrc, alt }: Props) => {
  return (
    <Container>
      <Poster src={imgSrc} alt={alt} loading='lazy' />
      <Button>Dowiedz się więcej</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`
const Poster = styled.img`
  width: 260px;
  height: 368px;
`

export default SingleEvent
