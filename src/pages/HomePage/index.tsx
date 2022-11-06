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
          <MyTyping>
            <Ttyping>|We Forge The Future|</Ttyping>
          </MyTyping>
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
`
const blink = keyframes`
  50%{
    border-color: transparent;
  }
`
const effect = keyframes`
  60% {
      border-color: transparent
  }
`

const AnimatedText = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  width: 100%;
  animation: ${typing} 2s steps(18), ${blink} 1s step-end infinite alternate;
  text-align: center;
  white-space:normal;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 3rem;
  text-transform: uppercase;

  /* position: absolute;
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
  text-transform: uppercase; */
`

const MyTyping = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
const MyEffect = styled.div`
  color: white;
  width: 42ch;
  animation: ${typing} 2s steps(25), ${effect} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
`

const HeadLineText = styled.h2`
  font-size: 3rem;
`

const MainHome = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
`

const t = keyframes`
  from {background-size:0 200%; width: 0}
`

const b = keyframes`
 50% {background-position:0 -100%,0 0}
`

const Ttyping = styled.span`
  --n: 53;
  color: transparent;
  background: linear-gradient(-90deg, #00dffc 5px, #0000 0) 10px 0,
    linear-gradient(#00dffc 0 0) 0 0;
  background-size: calc(var(--n) * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: ${b} 0.7s infinite steps(1),
    ${t} calc(var(--n) * 0.3s) steps(var(--n)) forwards;
`

export default HomePage
