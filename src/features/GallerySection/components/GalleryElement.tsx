import styled from 'styled-components'
import { Layout } from '../../../styles/breakpoints'

interface Props {
  imagePath: string
  altImgText: string
}

const GalleryElement = ({ imagePath, altImgText }: Props) => {
  return (
    <ColumnWrapper>
      <Image src={imagePath} alt={altImgText} />
    </ColumnWrapper>
  )
}

const ColumnWrapper = styled.div`
  min-width: 240px;
  position: relative;
`

const Image = styled.img`
  height: 16rem;
  width: 100%;
  object-fit: cover;

  @media only screen and (${Layout.tablet}) {
    height: 37.5rem;
  }
`

export default GalleryElement
