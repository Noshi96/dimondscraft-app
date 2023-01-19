import styled from 'styled-components';
import { MediaIcon } from '../../features/Footer/models/MediaIcon';
import InstagramLogo from '../../public/images/media/instagramLogo.webp';
import FacebookLogo from '../../public/images/media/fb_icon_325x325.webp';
import openseaLogo from '../../public/images/media/opensea.webp';
import twitterLogo from '../../public/images/media/twitter.webp';
import oneBidLogo from '../../public/images/media/onebidlogo.webp';
import spotifyLogo from '../../public/images/media/spotify.webp';
import SocialMedia from '../../features/Footer/components/SocialMedia';
import ArtCard from '../ArtCard';
import { Layout } from '../../styles/breakpoints';

const AuthorData = () => {
  const baseMedia: MediaIcon[] = [
    {
      path: FacebookLogo.src,
      redirectionLink: 'https://www.facebook.com/DiamondsCraftNFTart/',
      altText: 'FacebookLogo',
    },
    {
      path: twitterLogo.src,
      redirectionLink: 'https://twitter.com/diamondsct',
      altText: 'TwitterLogo',
    },
    {
      path: InstagramLogo.src,
      redirectionLink: 'https://www.instagram.com/diamondscraft.io/',
      altText: 'InstagramLogo',
    },
    // {
    //     path: openseaLogo.src,
    //     redirectionLink: 'https://opensea.io/DCFT/',
    //     altText: 'OpenseaLogo',
    // },
    // {
    //     path: spotifyLogo.src,
    //     redirectionLink:
    //         'https://open.spotify.com/show/33bLiSdONLfzUd8oNMYLTn?si=5dd99fa2d0744767',
    //     altText: 'SpotifyLogo',
    // },
    // {
    //     path: oneBidLogo.src,
    //     redirectionLink: 'https://onebid.pl/pl/auction/-/3391',
    //     altText: 'OneBidLogo',
    // },
  ];

  return (
    <ComponentWrapper>
      <Header1> Genesis_one </Header1>
      <AuthorName> Michael Brownik </AuthorName>
      <AuthorDesc> Lorem ipsum despacito omamale yeyeye</AuthorDesc>
      <SocialMedia headerText={''} media={baseMedia} />
      <AuthorsWorkCardsContainer>
        <ArtCard size={'medium'}></ArtCard>
        <ArtCard size={'medium'}></ArtCard>
        <ArtCard size={'medium'}></ArtCard>
        <ArtCard size={'medium'}></ArtCard>
        <ArtCard size={'medium'}></ArtCard>
      </AuthorsWorkCardsContainer>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.div`
  box-sizing: border-box;
  padding: 90px 20px 18px 20px;

  @media only screen and (${Layout.laptop}) {
    padding: 24px 20px;
  }
`;

const Header1 = styled.div`
  margin: 0;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;

  @media only screen and (${Layout.laptop}) {
    font-size: 3rem;
  }
`;

const AuthorName = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 8px 0 0 0;
`;

const AuthorDesc = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 40px;
  color: #ffffffaa;
`;

const AuthorsWorkCardsContainer = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fit, 300px);
  grid-template-columns: repeat(1, 1fr);
  column-gap: 60px;
  row-gap: 80px;
  place-items: center;
  margin-top: 100px;
  box-sizing: border-box;
  padding-bottom: 40px;

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 80px;
    column-gap: 40px;
    place-items: center;
  }
`;

export default AuthorData;
