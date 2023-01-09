import styled from 'styled-components';
import Link from 'next/link';

const logoImg = '/images/logoforge.png';
const Logo = () => {
  return (
    <Wrapper>
      <Link href='/'>
        <Image src={logoImg} loading='lazy' alt='logo_diamondscraft' />
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
