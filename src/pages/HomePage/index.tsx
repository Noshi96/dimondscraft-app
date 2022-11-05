import { EventSection } from '../../features/EventSection'
import { PageWrapper } from '../../layouts/PageWrapper'
import ParticlesBackground from '../../layouts/Particles'
import backgroundPhoto from '../../assets/samanta.png'
import { customOptionsFour } from '../../layouts/Particles/config/customOptionsFour'
import styled, { keyframes } from 'styled-components'
import { useCurrentHeight } from '../../hooks/useCurrentHeight'

const HomePage = () => {
  let height = `${useCurrentHeight()}px`

  return (
    <>
      <PageWrapper>
        <MainHome height={height}>
          <AnimatedText>
            <span>|</span>We Forge The Future<span>|</span>
          </AnimatedText>
          <Image
            src={backgroundPhoto}
            alt='logo'
            width={'100%'}
            height={height}
          />
          <ParticlesBackground
            width='100%'
            options={customOptionsFour}
            height={height}
          />
        </MainHome>
        <EventSection sectionTitle={'NASZE AKTUALNE PROJEKTY:'} />
      </PageWrapper>
    </>
  )
}

const Image = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 70% 0%;
`
const typing = keyframes`
  from {
    width: 0;
  }
  100%{
    border-right: 0px solid;
  }
`
const blink = keyframes`
  50%{
    border-color: transparent;
  }

`

const AnimatedText = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  width: 23ch;
  animation: ${typing} 2s steps(18), ${blink} 1s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 4em;
  text-transform: uppercase;
`

const MainHome = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
`

export default HomePage
