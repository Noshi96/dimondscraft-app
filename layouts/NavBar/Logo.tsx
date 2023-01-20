import styled from 'styled-components';
import Link from 'next/link';
import logoImg from '../../public/images/logoforge.webp';

const Logo = () => {
  return (
    <Wrapper>
      <Link href='/'>
        <Image src={logoImg.src} loading='lazy' alt='logo_diamondscraft' />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 4rem;
`;
export default Logo;
