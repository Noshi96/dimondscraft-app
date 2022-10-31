import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { customOptionsFour } from './config/customOptionsFour'
import styled from 'styled-components'

interface Props {
  width?: string
  height?: string
  imgUrl?: string
  imgWidth?: string
  imgHeight?: string
}

const ParticlesBackground = ({
  width,
  height,
  imgUrl,
  imgWidth,
  imgHeight,
}: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Wrapper>
      <Image src={imgUrl} alt='logo' width={imgWidth} height={imgHeight} />
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={customOptionsFour}
        width={width}
        height={height}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Image = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  filter: grayscale(100%) contrast(2.75) brightness(30%);
`

export default ParticlesBackground
