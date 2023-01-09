import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PathsTypes } from './model';
import { buttonStyle } from '../../styles/button.style';

interface ActiveLink {
  path: string;
  pathto: string;
}

const scrollToEntrySection = (
  scrollHook: 'entryPageStartHook' | 'entryPageEndHook'
): void => {
  setTimeout(() => {
    const element = document.getElementById(scrollHook) as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }, 300);
};

const Nav = () => {
  const { asPath } = useRouter();

  const paths: PathsTypes[] = [
    {
      key: 'home',
      destination: '/',
      path: asPath,
      pathto: '/',
      nameOfPage: 'Strona główna',
      exact: true,
      scrollHook: 'entryPageStartHook',
    },
    {
      key: 'about',
      destination: '/about',
      path: asPath,
      pathto: '/about',
      nameOfPage: 'O nas',
      scrollHook: 'entryPageStartHook',
    },
    {
      key: 'gallery',
      destination: '/gallery',
      path: asPath,
      pathto: '/gallery',
      nameOfPage: 'Galeria',
      scrollHook: 'entryPageStartHook',
    },
    {
      key: 'contact',
      destination: '/contact',
      path: asPath,
      pathto: '/contact',
      nameOfPage: 'Kontakt',
      scrollHook: 'entryPageStartHook',
    },
  ];

  return (
    <NavList>
      {paths.map(
        ({ key, destination, nameOfPage, scrollHook, path, pathto }) => (
          <Item key={key}>
            <NavLinkStyled
              href={destination}
              path={path}
              pathto={pathto}
              onClick={() => scrollToEntrySection(scrollHook)}
            >
              {nameOfPage}
            </NavLinkStyled>
          </Item>
        )
      )}
    </NavList>
  );
};

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  list-style-type: none;
  padding-inline-start: 0;
`;

const Item = styled.li`
  cursor: pointer;
`;

const NavLinkStyled = styled(Link)<ActiveLink>`
  min-height: 60px;
  ${buttonStyle};
  border: 1px solid transparent;

  ${({ pathto, path }) =>
    pathto === path &&
    css`
      background: #2c1b96 !important;
      &:visited {
        color: #ffffff;
        border: 1px solid transparent;
      }
    `}

  &:hover {
    background-color: #2c1b96;
    color: #ffffff;
    border: 1px solid transparent;
  }
`;

export default Nav;
