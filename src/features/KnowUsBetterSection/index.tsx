import styled from 'styled-components'
import { AdjustingSection } from "../../layouts/AdjustingSection/AdjustingSection";
import { Layout } from '../../styles/breakpoints'

const KnowUsBetterSection = () => {
    const style = {
        color: 'white',
        fontSize: 200,
    };
    return (
        <FullWidthContainer>
            <ExtendedAdjustingSection>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                <SpotifyWidget>
                    <iframe style={style}
                            src="https://open.spotify.com/embed/episode/5bX870sornBdKFQgik2utu?utm_source=generator&theme=0"
                            width="100%" height="152" frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                </SpotifyWidget>
            </ExtendedAdjustingSection>

        </FullWidthContainer>
    )
}

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
`

const ExtendedAdjustingSection = styled(AdjustingSection)`
  box-sizing: border-box;
  color: #ffffff;
  font-size: 1.2rem;

  @media only screen and (${Layout.tablet}) {
    padding: 3rem 4rem;
  }

  @media only screen and (${Layout.desktop}) {
    padding: 3rem 12rem;
  }
`

const SpotifyWidget = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem 0 0 0;

  @media only screen and (${Layout.laptop}) {
    padding: 3rem 0;
  }
`

export default KnowUsBetterSection;
