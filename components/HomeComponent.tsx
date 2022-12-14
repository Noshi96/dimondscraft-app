import ArtistsSection from '../features/ArtistsSection'
import { EventSection } from '../features/EventSection'
import { PageWrapper } from '../layouts/PageWrapper'

const HomeComponent = () => {
  return (
    <>
      <PageWrapper>
        <EventSection />
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

export default HomeComponent
