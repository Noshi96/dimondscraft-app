import { EventSection } from '../../features/EventSection'
import { PageWrapper } from '../../layouts/PageWrapper'
import ParticlesBackground from '../../layouts/Particles'
import backgroundPhoto from '../../assets/samanta.png'
import { customOptionsFour } from '../../layouts/Particles/config/customOptionsFour'
import styled from 'styled-components'
import { useCurrentHeight } from '../../hooks/useCurrentHeight'

const HomePage = () => {
  let height = `${useCurrentHeight()}px`

  return (
    <>
      <PageWrapper>
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

export default HomePage
