import { EventSection } from '../../features/EventSection'
import { PageWrapper } from '../../layouts/PageWrapper'
import ParticlesBackground from '../../layouts/Particles'
import backgroundPhoto from '../../assets/samanta.png'
import { customOptionsFour } from '../../layouts/Particles/config/customOptionsFour'
import styled from 'styled-components'
import { useCurrentHeight } from '../../hooks/useCurrentHeight'
import ArtistsSection from '../../features/ArtistsSection'
import { useState, useEffect } from 'react'
import { Layout } from '../../styles/breakpoints'
import EntrySection from '../../features/EntrySection'

const HomePage = () => {
  let height = `${useCurrentHeight()}px`

  const [text, setText] = useState<string>('')

  const textToDisplay = 'We Forge The Future'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      let newLetter = textToDisplay[i++]
      setText((prev) => prev.concat(newLetter))
      if (i === textToDisplay.length) {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageWrapper>
        {/* <ParticlesBackground
          width='100%'
          options={customOptionsFour}
          style={{ position: 'fixed', zIndex: -1 }}
        />
        <MainHome height={height}>
          <TextWrapper>
            <Headline>{`|${text}|`}</Headline>
          </TextWrapper>
          <Image
            src={backgroundPhoto}
            alt='logo'
            width={'100%'}
            height={height}
          />
        </MainHome> */}
        <EntrySection />
        <EventSection sectionTitle={'NASZE AKTUALNE PROJEKTY:'} />
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

const MainHome = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
`

const TextWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 3rem;

  @media only screen and (${Layout.tablet}) {
    font-size: 4rem;
  }
`

const Image = styled.img`
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 70% 0%;
`

export default HomePage
