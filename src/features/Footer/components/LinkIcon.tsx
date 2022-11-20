import styled from 'styled-components'

interface Props {
  path: string
  redirectionLink: string
}

const LinkIcon = ({ path, redirectionLink }: Props) => {
  return (
    <a href={redirectionLink} target={'_blank'} rel='noopener noreferrer'>
      <Icon src={path}></Icon>
    </a>
  )
}

const Icon = styled.img`
  width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;
  margin-right: 3rem;
  filter: grayscale(1);

  &:hover {
    transform: translateY(-8px);
    filter: grayscale(0);
  }
`

export default LinkIcon
