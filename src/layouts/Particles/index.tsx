import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import styled from 'styled-components'
import type { ISourceOptions } from 'tsparticles-engine'
import type { CSSProperties } from 'react'

interface Props {
  width?: string
  height?: string
  options?: ISourceOptions
  style?: CSSProperties
}

const ParticlesBackground = ({ width, options, height, style }: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <>
      <StyledParticles
        id='tsparticles'
        init={particlesInit}
        options={options}
        width={width}
        height={height}
        style={style}
      />
    </>
  )
}

const StyledParticles = styled(Particles)`
  height: ${(props) => (props.height ? props.height : '0')};
`
export default ParticlesBackground
