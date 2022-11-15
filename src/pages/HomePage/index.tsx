import { EventSection } from '../../features/EventSection'
import { PageWrapper } from '../../layouts/PageWrapper'
import ArtistsSection from '../../features/ArtistsSection'
import PartnershipSection from '../../features/PartnershipSection'
import KnowUsBetterSection from '../../features/KnowUsBetterSection'

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <KnowUsBetterSection />
        <EventSection />
        <PartnershipSection sectionTitle={'Partnerzy'} />
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

export default HomePage
