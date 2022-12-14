import ArtistsSection from '../features/ArtistsSection'
import { EventSection } from '../features/EventSection'
import KnowUsBetterSection from '../features/KnowUsBetterSection'
import PartnershipSection from '../features/PartnershipSection'
import { PageWrapper } from '../layouts/PageWrapper'

const HomeComponent = () => {
  return (
    <>
      <PageWrapper>
        {/* <KnowUsBetterSection />
        <EventSection />
        <PartnershipSection sectionTitle={'Partnerzy'} /> */}
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

export default HomeComponent
