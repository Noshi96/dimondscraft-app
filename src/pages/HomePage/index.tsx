import { PageWrapper } from '../../layouts/PageWrapper'
import ParticlesBackground from '../../layouts/Particles'
import backgroundPhoto from '../../assets/background.png'

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <ParticlesBackground
          width='100%'
          imgSrc={backgroundPhoto}
          imgWidth='100%'
        />
      </PageWrapper>
    </>
  )
}

export default HomePage
