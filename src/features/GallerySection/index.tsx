import styled from 'styled-components'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import GalleryOpener from './components/GalleryOpener'
import GalleryElement from './components/GalleryElement'
import jan from '../../assets/jan-drnico-oklinski-artysta.jpg'
import gosia from '../../assets/gosia-kosiec-fot-agnieszka-cytacka.jpg'
import { useState } from 'react'
import { Layout } from '../../styles/breakpoints'

export function GallerySection() {
  const [state, setState] = useState<any>(1)
  const imageGalleryPathsOne = [jan, gosia]
  const imageGalleryPathsTwo = [
    {
      imagePath: jan,
      altImgText: 'jan',
    },
    {
      imagePath: gosia,
      altImgText: 'gosia',
    },
  ]
  const imageAlt = ['jan', 'gosia']
  const [showGallery, setShowGallery] = useState<boolean>(true)

  console.log(state)
  return (
    <FullWidthContainer>
      <Gallery>
        {showGallery ? (
          <GalleryOpener
            buttonTitle={'Aukcja 1'}
            firstPresentationImageSrc={jan}
            altImgText={'Janek'}
            openGalleryHandler={setShowGallery}
            particularGallery={imageGalleryPathsOne}
            imageAlt={imageAlt}
          />
        ) : (
          <GalleryElement imagePath={jan} altImgText={'Janek'} />
        )}
      </Gallery>
    </FullWidthContainer>
  )
}

const Gallery = styled(AdjustingSection)`
  display: flex;
  max-width: 1280px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  flex: 50%;
  color: #ffffff;
  padding-top: 3rem;
  justify-content: center;

  @media only screen and ${Layout.laptop} {
    justify-content: flex-start;
  }
`

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
`
