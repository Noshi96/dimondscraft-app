import styled from 'styled-components'
import { Layout } from '../../../styles/breakpoints'

interface Props {
  name: string
  src: string
}

const CarouselItem = ({ name, src }: Props) => {
  const handleDragStart = (e: any) => e.preventDefault()

  return (
    <Wrapper>
      <ContentWrapper>
        <Image
          src={src}
          alt={src}
          onDragStart={handleDragStart}
          role='presentation'
        />
        <TextWrapper>
          <Name>{name}</Name>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 4rem;
  transform: translateX(-4rem); */
`

const Image = styled.img`
  width: 15rem;
  height: 15rem;

  @media only screen and (${Layout.tablet}) {
    width: 20rem;
    height: 20rem;
  }
`
const Name = styled.p`
  display: inline-block;
  font-size: 1.4rem;
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-left: 1px solid #ffffff;
    border-top: 1px solid #ffffff;
  }

  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    right: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-right: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
  }
`
const TextWrapper = styled.div`
  position: relative;
  width: 100%;
`
export default CarouselItem
