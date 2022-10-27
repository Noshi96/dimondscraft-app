import { NavBar } from '../../components/NavBar'
import { PageWrapper } from '../../components/PageWrapper'
import ParticlesBackground from '../../components/Particles'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <img src='https://wallpapercave.com/wp/wp8719460.jpg' alt='temp-img' />
      <ParticlesBackground />
      {/* <PageWrapper>{'Inside'}</PageWrapper> */}
    </>
  )
}

export default HomePage
