import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { customOptionsFour } from './config/customOptionsFour'
import styled from 'styled-components'
import { useCurrentHeight } from '../../hooks/useCurrentHeight'

interface Props {
  width?: string
  imgSrc?: string
  imgWidth?: string
}

const ParticlesBackground = ({ width, imgSrc, imgWidth }: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  let height = `${useCurrentHeight()}px`

  return (
    <>
      <Image src={imgSrc} alt='logo' width={imgWidth} height={height} />
      <StyledParticles
        id='tsparticles'
        init={particlesInit}
        options={customOptionsFour}
        width={width}
        height={height}
      />
    </>
  )
}

const StyledParticles = styled(Particles)`
  height: ${(props) => (props.height ? props.height : '0')};
`

const Image = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  filter: grayscale(100%) contrast(2.75) brightness(30%);
  object-fit: cover;
  object-position: 70% 0%;
`

export default ParticlesBackground
