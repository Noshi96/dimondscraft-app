import styled from 'styled-components'

const Index = () => {

    return (
        <ChampionCardContainer>
            <TopImage></TopImage>
            <AvatarBox>
                <AvatarImage></AvatarImage>
            </AvatarBox>
            <CardContent>
                <BaseText> @The genesis </BaseText>
                <DetailText> $250.000 </DetailText>
            </CardContent>
        </ChampionCardContainer>
    )
}

const ChampionCardContainer = styled.div`
  width: 208px;
  height: 210px;
  position: relative;
`

const TopImage = styled.div`
  width: 100%;
  height: 99px;
  background: #6e7ebc;
`

const AvatarBox = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  top: 59px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AvatarImage = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #465798;
`

const CardContent = styled.div`
  height: 111px;
  width: 100%;
  background: #000000;
  box-sizing: border-box;
  padding: 48px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
`

const BaseText = styled.div`
  height: 22px;
  //font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`

const DetailText = styled.div`
  height: 22px;

  //font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #979797;
  margin-top: 8px;
`

export default Index;
