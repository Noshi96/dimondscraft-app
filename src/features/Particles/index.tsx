import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { customOptionsFour } from './store/customOptionsFour'
import styled from 'styled-components'

interface Props {
  width?: string
  height?: string
  imgUrl?: string
  imgWidth?: string
  imgHeight?: string
}

const ParticlesBackground = ({
  width = '100%',
  height = '100%',
  imgUrl,
  imgWidth,
  imgHeight,
}: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  )

  return (
    <Wrapper>
      <Image src={imgUrl} alt='logo' width={imgWidth} height={imgHeight} />
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={customOptionsFour}
        width={width}
        height={height}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`

export default ParticlesBackground
