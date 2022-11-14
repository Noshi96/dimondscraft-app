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
            <CryptoSignature>
                <Icon src={ iconPath }></Icon>
                <Name> { name } </Name>
            </CryptoSignature>

            <Price> { price || '-' } PLN </Price>
        </TokenDataWrapper>
    )
}


const TokenDataWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`

const CryptoSignature = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 1rem;
`

const Name = styled.div`
  margin-right: 4rem;
  font-size: 3rem;
`;

const Price = styled.div`
  font-size: 1.2rem;
  margin: 1.5rem 0 0 2rem;
  color: #aaaaaa;
`;



export default TokenData;


