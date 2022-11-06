import styled from "styled-components";

interface Props {
    path: string;
    redirectionLink: string;
}

const LinkIcon = ({ path, redirectionLink }: Props) => {
    return (
        <a href={redirectionLink} target={'_blank'}>
            <Icon src={path}></Icon>
        </a>
    )
}

const Icon = styled.img`
  width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-4px);
  }
`

export default LinkIcon;
