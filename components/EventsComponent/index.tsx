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
        <Sorting>Sorting comp</Sorting>
      </HeaderBox>
      <ContentBox>
        <EventsSection />
      </ContentBox>
    </StyledBasicSection>
  );
};

const StyledBasicSection = styled(BasicSection)`
  margin-top: 20px;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  background: #34a69e;
  position: relative;
`;

const SectionTitle = styled.p``;

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
