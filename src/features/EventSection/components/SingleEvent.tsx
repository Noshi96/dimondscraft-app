import styled from 'styled-components'
import { Button } from './Button'

interface Props {
  imgUrl: string
  alt: string
}

const SingleEvent = ({ imgUrl, alt }: Props) => {
  return (
    <Container>
      <Poster src={imgUrl} alt={alt} loading='lazy' />
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
