import styled from 'styled-components';
import { Layout } from '../../styles/breakpoints';
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Props {
  sectionTitle: string;
}

interface Sponsor {
  imageSrc: any;
  bgColor: string;
}

interface SponsorImageWrapperStyles {
  bgColor?: string;
}

const importAll = (r: __WebpackModuleApi.RequireContext) => {
  return r.keys().map(r);
};

const sponsors = (importAll(
  require.context(`../../public/images/sponsors/`, false, /\.(webp)$/)
) as any[]).map((imageSrc) => {
  const bgColor = (
    imageSrc.default.src.split('backgroundcolor')[1] || ''
  ).substring(0, 6);
  return {
    imageSrc,
    bgColor: bgColor ? `#${bgColor}` : 'transparent',
  } as Sponsor;
});

const PartnershipSection = ({ sectionTitle }: Props) => {
  const eventRef = useRef(null);

  const [sponsorsList, setSponsorsList] = useState<Sponsor[]>([]);

  useEffect(() => {
    const el = eventRef.current;
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    setSponsorsList(sponsors);
  }, []);

  return (
    <FullWidthContainer>
      <ExtendedAdjustingSection>
        <Container>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <ImageList ref={eventRef}>
            {sponsorsList.map(({ imageSrc, bgColor }: Sponsor) => (
              <SponsorImgWrapper bgColor={bgColor} key={imageSrc.default.src}>
                <SponsorImg
                  src={imageSrc.default.src}
                  alt={imageSrc.default.src}
                />
              </SponsorImgWrapper>
            ))}
          </ImageList>
        </Container>
      </ExtendedAdjustingSection>
    </FullWidthContainer>
  );
};

const FullWidthContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(#080924, #000000);
  padding-bottom: 5rem;
`;

const ExtendedAdjustingSection = styled(AdjustingSection)`
  padding-top: 8rem;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  text-transform: uppercase;

  @media only screen and (${Layout.tablet}) {
    font-size: 2rem;
  }
`;

const ImageList = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  flex-direction: row;
  justify-content: center;
  padding: 0 0 0 1rem;
  box-sizing: border-box;

  @media only screen and (${Layout.tablet}) {
    padding: 0 4rem 0;
  }
`;

const SponsorImgWrapper = styled.div<SponsorImageWrapperStyles>`
  background: ${({ bgColor }) => bgColor};
`;

const SponsorImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;

  @media only screen and (${Layout.tablet}) {
    width: 240px;
    height: 240px;
  }
`;

export default PartnershipSection;
