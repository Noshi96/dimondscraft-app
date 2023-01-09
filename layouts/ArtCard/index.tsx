import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import {
    largeCardStyles,
    mediumCardStyles, selectArtistName,
    selectArtName, selectCardData, selectCardImage, selectTimeContainer, selectTimerCount, selectTimerText,
    SliderElementData
} from "./utils";


const ArtCard: React.FC<{ size: 'medium' | 'large' }> = ({ size = 'large' }) => {
    const [styleConfig, setStyleConfig] = useState(largeCardStyles);

    useEffect(() => {
        if (size === 'medium') {
            setStyleConfig(mediumCardStyles);
        }
    }, [])

    return (
        <Card styleConfig={styleConfig}>
            <CardImageContainer styleConfig={styleConfig}> </CardImageContainer>

            <CardDataContainer styleConfig={styleConfig}>
                <AdditionalText> physical art & nft </AdditionalText>
                <ArtName styleConfig={styleConfig}> Untitled (Man and Woman), 1939-1942 </ArtName>
                <ArtistName styleConfig={styleConfig}> Adam Nowak </ArtistName>

                <TimerContainer styleConfig={styleConfig}>
                    <TimerText styleConfig={styleConfig}> Rozpocznie się za: </TimerText>
                    <TimerCount styleConfig={styleConfig}> 00 DNI : 22 H :22M:23S </TimerCount>
                </TimerContainer>
            </CardDataContainer>
        </Card>
    )
}


const Card = styled.div<SliderElementData>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  color: #ffffff;

  width:  ${({styleConfig}) => styleConfig.width};
  height: ${({styleConfig}) => styleConfig.height};
`

const CardImageContainer = styled.div<SliderElementData>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #6e7ebc; 

  height: ${({styleConfig}) => selectCardImage(styleConfig).height};
`

const CardDataContainer = styled.div<SliderElementData>`
  box-sizing: border-box;
  padding: 9px 0 0 0;

  height: ${({styleConfig}) => selectCardData(styleConfig).height};
`

const AdditionalText = styled.div`
  //font-family: 'Rowdies';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  height: 17px;
  margin: 0 13px 0 auto;
  text-align: right;
`

const ArtName = styled.div<SliderElementData>`
  width: 100%;
  color: #ffffff;
  padding: 0 25px;
  //font-family: 'Rowdies';
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;

  height: ${({styleConfig}) => selectArtName(styleConfig).height};
  font-size: ${({styleConfig}) => selectArtName(styleConfig).fontSize};
  line-height: ${({styleConfig}) => selectArtName(styleConfig).lineHeight};
`

const ArtistName = styled.div<SliderElementData>`
  width: 100%;
  padding: 0 25px;
  margin-top: 13px;
  
  //font-family: 'Open Sans';
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  
  color: #ffffff;

  height: ${({styleConfig}) => selectArtistName(styleConfig).height};
  font-size: ${({styleConfig}) => selectArtistName(styleConfig).fontSize};
  line-height: ${({styleConfig}) => selectArtistName(styleConfig).lineHeight};
`

const TimerContainer = styled.div<SliderElementData>`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  padding: 0 25px;
  margin-top: ${({styleConfig}) => selectTimeContainer(styleConfig).marginTop};
`

const TimerText = styled.div<SliderElementData>`
  //font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  text-align: left;

  font-size: ${({styleConfig}) => selectTimerText(styleConfig).fontSize};
  line-height: ${({styleConfig}) => selectTimerText(styleConfig).lineHeight};
`

const TimerCount = styled.div<SliderElementData>`
  //font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;

  font-size: ${({styleConfig}) => selectTimerCount(styleConfig).fontSize};
  line-height: ${({styleConfig}) => selectTimerCount(styleConfig).lineHeight};
`


export default ArtCard;
