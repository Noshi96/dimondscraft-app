
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
          <TextWrapper>
            <AnimatedText>|We Forge The Future|</AnimatedText>
          </TextWrapper>
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

const typing = keyframes`
  from {background-size:0 200%; width: 0}
`

const blink = keyframes`
 50% {background-position:0 -100%,0 0}
`

const AnimatedText = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 3rem;
  --n: 23;
  color: transparent;
  background: linear-gradient(-90deg, #ffffff 5px, #0000 0) 10px 0,
    linear-gradient(#ffffff 0 0) 0 0;
  background-size: calc(var(--n) * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: ${blink} 0.7s infinite steps(1),
    ${typing} calc(var(--n) * 0.2s) steps(var(--n)) forwards;

  @media only screen and (min-width: 600px) {
    font-size: 4rem;
  }
`

const Image = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 70% 0%;
`

export default HomePage
