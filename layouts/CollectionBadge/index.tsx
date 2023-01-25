import styled from 'styled-components';

interface Props {
  src?: string;
  alt?: string;
  index?: number;
  price?: string;
}

const CollectionBadge = ({ src, alt, index, price }: Props) => {
  return (
    <BadgeContainer>
      <IndexText> {(index || 0) + 1} </IndexText>
      <Image src={src} alt={alt} />
      <DataContainer>
        <BaseText> @Dr Nico </BaseText>
        <DetailText>{`${price}`} </DetailText>
      </DataContainer>
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  width: 320px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const IndexText = styled.div`
  //font-family: 'Open Sans';
  height: 22px;
  width: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-right: 15px;
  color: #979797;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #c4c4c4;
  margin-right: 21px;
`;

const DataContainer = styled.div`
  margin: 14px 0 15px 0;
  width: 160px;
  display: flex;
  flex-direction: column;
`;

const BaseText = styled.div`
  height: 22px;

  //font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 7px;
  color: #ffffff;
`;

const DetailText = styled.div`
  height: 22px;

  //font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #979797;
`;

export default CollectionBadge;
