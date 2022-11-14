import { EventSection } from '../../features/EventSection'
import { PageWrapper } from '../../layouts/PageWrapper'
import ArtistsSection from '../../features/ArtistsSection'
import PartnershipSection from '../../features/PartnershipSection'
import EntrySection from '../../features/EntrySection'
import KnowUsBetterSection from "../../features/KnowUsBetterSection";

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <EntrySection />
        <KnowUsBetterSection />
        <EventSection />
        <PartnershipSection sectionTitle={'Partnerzy'} />
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

export default HomePage
