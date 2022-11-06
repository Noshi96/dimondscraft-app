import styled from "styled-components";

interface Props {
    iconPath: string;
    name: string;
    price: number | string;
    className?: string;
}


const TokenData = ({ iconPath, name, price, className }: Props) => {
    return (
        <TokenDataWrapper className={className || ''}>
            <Icon src={ iconPath }></Icon>
            <Name> { name } </Name>
            <Price> { price || '-' } PLN </Price>
        </TokenDataWrapper>
    )
}


const TokenDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const Name = styled.div`
  width: 120px;
  margin-right: 4rem;
`;
const Price = styled.div``;



export default TokenData;


