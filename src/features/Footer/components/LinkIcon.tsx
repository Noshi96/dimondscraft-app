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
  width: 64px;
  height: 64px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
  }
`

export default LinkIcon