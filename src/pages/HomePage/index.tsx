import { PageWrapper } from '../../layouts/PageWrapper'
import ParticlesBackground from '../../features/Particles'

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <ParticlesBackground
          width='100%'
          height='700px'
          imgUrl='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
          imgWidth='100%'
          imgHeight='700px'
        />
      </PageWrapper>
    </>
  )
}

export default HomePage
