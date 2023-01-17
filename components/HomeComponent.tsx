import ArtistsSection from '../features/ArtistsSection'
import PartnershipSection from '../features/PartnershipSection'
import EventSection from '../features/EventSection'
import { PageWrapper } from '../layouts/PageWrapper'

const HomeComponent = () => {
  return (
    <>
      <PageWrapper>
        <PartnershipSection sectionTitle='Partnerzy' />
        <EventSection />
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

export default HomeComponent
