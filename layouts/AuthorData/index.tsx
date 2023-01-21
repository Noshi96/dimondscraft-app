import styled from 'styled-components';
import { MediaIcon } from '../../features/Footer/models/MediaIcon';
import FacebookLogo from '../../public/images/media/fb_icon_325x325.webp';
import InstagramLogo from '../../public/images/media/instagramLogo.webp';
import SocialMedia from '../../features/Footer/components/SocialMedia';
import ArtCard from '../ArtCard';
import { Layout } from '../../styles/breakpoints';

const openseaLogo = '/images/media/opensea.png';
const twitterLogo = '/images/media/twitter.png';
const oneBidLogo = '/images/media/onebidlogo.png';
const spotifyLogo = '/images/media/spotify.png';


const AuthorData = () => {
    const baseMedia: MediaIcon[] = [
        {
            path: FacebookLogo.src,
            redirectionLink: 'https://www.facebook.com/DiamondsCraftNFTart/',
            altText: 'FacebookLogo',
        },
        {
            path: twitterLogo,
            redirectionLink: 'https://twitter.com/diamondsct',
            altText: 'TwitterLogo',
        },
        {
            path: InstagramLogo.src,
            redirectionLink: 'https://www.instagram.com/diamondscraft.io/',
            altText: 'InstagramLogo',
        },
        // {
        //     path: openseaLogo,
        //     redirectionLink: 'https://opensea.io/DCFT/',
        //     altText: 'OpenseaLogo',
        // },
        // {
        //     path: spotifyLogo,
        //     redirectionLink:
        //         'https://open.spotify.com/show/33bLiSdONLfzUd8oNMYLTn?si=5dd99fa2d0744767',
        //     altText: 'SpotifyLogo',
        // },
        // {
        //     path: oneBidLogo,
        //     redirectionLink: 'https://onebid.pl/pl/auction/-/3391',
        //     altText: 'OneBidLogo',
        // },
    ];


    return (
        <ComponentWrapper>
            <Header1> Genesis_one </Header1>
            <AuthorName> Michael Brownik </AuthorName>
            <AuthorDesc> Lorem ipsum despacito omamale yeyeye</AuthorDesc>
            <SocialMedia
                headerText={''}
                media={baseMedia}
            />
        </ComponentWrapper>
    )

}

const ComponentWrapper = styled.div`
  padding: 0.5rem;  
`

const Header1 = styled.div`
  margin: 0;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;

  @media only screen and (${Layout.laptop}) {
    font-size: 3rem;
    line-height: 3rem;
  }
`

const AuthorName = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 8px 0 0 0;
`

const AuthorDesc = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 30px;
  color: #ffffffaa;
`

export default AuthorData
