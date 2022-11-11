import { EventSection } from '../../features/EventSection'
import { PageWrapper } from '../../layouts/PageWrapper'
import ArtistsSection from '../../features/ArtistsSection'
import EntrySection from '../../features/EntrySection'

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <EntrySection />
        <EventSection sectionTitle={'NASZE AKTUALNE PROJEKTY:'} />
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

export default HomePage
