import styled from 'styled-components'
import { Layout } from '../../../styles/breakpoints'
import { OpenGalleryButton } from './OpenGalleryButton'
import React from 'react'

interface Props {
  buttonTitle: string
  firstPresentationImageSrc: string
  altImgText: string
  openGalleryHandler?: any
  particularGallery: string[]
  imageAlt: string[]
}

const GalleryOpener = ({
  buttonTitle,
  firstPresentationImageSrc,
  altImgText,
  openGalleryHandler,
}: Props) => {
  return (
    <ColumnWrapper>
      <Image src={firstPresentationImageSrc} alt={altImgText} />
      <OpenGalleryButton onClick={() => openGalleryHandler(2)}>
        {buttonTitle}
      </OpenGalleryButton>
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

export default GalleryOpener
