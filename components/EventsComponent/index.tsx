import styled from 'styled-components';
import EventsSection from '../../features/EventsSection';
import { BasicSection } from '../../layouts/AdjustingSection/AdjustingSection';
import AuthorData from '../../layouts/AuthorData';

interface Props {
  title: string;
}

const EventsComponent = ({ title }: Props) => {
  return (
    <StyledBasicSection>
      <HeaderBox>
        <SectionTitle>{title}</SectionTitle>
        <Sorting>
          <p>Sortowanie</p>
          <p>Od najnowszych</p>
        </Sorting>
      </HeaderBox>
      <ContentBox>
        <EventsSection />
      </ContentBox>
    </StyledBasicSection>
  );
};

const StyledBasicSection = styled(BasicSection)`
  margin-top: 8rem;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SectionTitle = styled.p`
  font-size: 2rem;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Sorting = styled.div``;

const AvatarBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  left: calc(50% - 70px);
  top: 138px;
`;

const ContentBox = styled.div`
  width: 100%;
  background: #000000aa;
  min-height: 1000px;
  margin-top: 20px;
`;

export default EventsComponent;
