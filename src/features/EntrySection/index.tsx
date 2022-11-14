import styled from 'styled-components'
import { useState } from 'react'
import background from '../../assets/entry/background.svg'
import leftMiddleShape1 from '../../assets/entry/left_middle_shape_1.svg'
import leftMiddleShape2 from '../../assets/entry/left_middle_shape_2.svg'
import rightMiddleShape1 from '../../assets/entry/right_middle_shape1.svg'
import rightMiddleShape2 from '../../assets/entry/right_middle_shape2.svg'
import shape1 from '../../assets/entry/shape1.svg'
import shape2 from '../../assets/entry/shape2.svg'
import shape3 from '../../assets/entry/shape3.svg'
import shape4 from '../../assets/entry/shape4.svg'
import shape5 from '../../assets/entry/shape5.svg'
import shape6 from '../../assets/entry/shape6.svg'
import mainMiddleShape from '../../assets/entry/main_middle_shape.svg'
import droid from '../../assets/entry/droid2.png'
import glow1 from '../../assets/entry/glow1.png'
import glow2 from '../../assets/entry/glow2.png'
import glow3 from '../../assets/entry/glow3.png'
import { Layout } from '../../styles/breakpoints'
import {
  AnimationProps,
  leftAnimation,
  rightAnimation,
  toTopAnimation,
  hideDroidAnimation,
  moveDroidToTopAnimation,
  scaleUpAndDownAnimation,
  hideRhombsAnimation,
  fadeInAnimation,
  lengthOfTime,
  fadeInBackGlowAnimation,
} from './animations'
import { useTextTyping } from '../../hooks/useTextTyping'
import { delay } from '../../utils/DelayFunction'

const EntrySection = () => {
  const [text, setText] = useState<string>('')

  useTextTyping(delay, setText)

  const {
    sec025,
    sec2,
    sec21,
    sec22,
    sec23,
    sec24,
    sec25,
    sec26,
  } = lengthOfTime

  return (
    <>
      <Background src={background} alt='background' />
      <Wrapper>
        <Content>
          <OutsideLayerLeft animationLength={sec2}>
            <LeftTopOutside src={shape1} alt='left_top_outside' />
            <LeftMiddleOutside src={shape6} alt='left_middle_outside' />
            <LeftBottomOutside src={shape3} alt='left_bottom_outside' />
          </OutsideLayerLeft>

          <MainDroidLayer>
            <BehindMainLayer>
              <RightMiddleInsideDiv
                animationLength={sec25}
                animationSecondLength={sec025}
                animationDelay={sec25}
              >
                <RightMiddleInside
                  src={rightMiddleShape2}
                  alt='right_middle_inside'
                />
              </RightMiddleInsideDiv>
              <RightTopInsideDiv
                animationLength={sec23}
                animationSecondLength={sec025}
                animationDelay={sec23}
              >
                <RightTopInside
                  src={rightMiddleShape1}
                  alt='right_top_inside'
                />
              </RightTopInsideDiv>
              <LeftTopInsideDiv
                animationLength={sec21}
                animationSecondLength={sec025}
                animationDelay={sec21}
              >
                <LeftTopInside src={rightMiddleShape1} alt='left_top_inside' />
              </LeftTopInsideDiv>
            </BehindMainLayer>

            <GlowLayer animationLength={sec2}>
              <Glow src={glow1} alt='glow1' />
              <Glow src={glow2} alt='glow2' />
              <Glow src={glow3} alt='glow3' />
            </GlowLayer>

            <MainMiddleShape
              animationLength={sec2}
              src={mainMiddleShape}
              alt='main_middle_shape'
            />

            <MiddleLayer>
              <DroidMask>
                <Droid src={droid} alt='droid' />
              </DroidMask>
              <TextWrapper>
                <Headline>{`${text}`}</Headline>
              </TextWrapper>
            </MiddleLayer>

            <OverlappingDroidLayer>
              <LeftMiddleInsideDiv
                animationLength={sec26}
                animationSecondLength={sec025}
                animationDelay={sec26}
              >
                <LeftMiddleInside
                  src={leftMiddleShape1}
                  alt='left_middle_inside'
                />
              </LeftMiddleInsideDiv>
              <LeftBottomInsideDiv
                animationLength={sec24}
                animationSecondLength={sec025}
                animationDelay={sec24}
              >
                <LeftBottomInside
                  src={leftMiddleShape2}
                  alt='left_bottom_inside'
                />
              </LeftBottomInsideDiv>
              <RightBottomInsideDiv
                animationLength={sec22}
                animationSecondLength={sec025}
                animationDelay={sec22}
              >
                <RightBottomInside
                  src={rightMiddleShape1}
                  alt='right_bottom_inside'
                />
              </RightBottomInsideDiv>
            </OverlappingDroidLayer>
          </MainDroidLayer>

          <OutsideLayerRight animationLength={sec2}>
            <RightTopOutside src={shape2} alt='right_top_outside' />
            <RightMiddleOutside src={shape5} alt='right_middle_outside' />
            <RightBottomOutside src={shape4} alt='right_bottom_outside' />
          </OutsideLayerRight>
        </Content>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section<AnimationProps>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`
const Background = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const OutsideLayerLeft = styled.div<AnimationProps>`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0%;
  animation: ${leftAnimation};
`

const LeftTopOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-1040%, -705%);
  width: 30px;
`

const LeftMiddleOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-1140%, 15%);
  width: 45px;
`

const LeftBottomOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 45px;
  transform: translate(-940%, 560%);
`

const MainDroidLayer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const BehindMainLayer = styled.div<AnimationProps>`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
`

const RightMiddleInsideDiv = styled.div<AnimationProps>`
  animation: ${hideRhombsAnimation}, ${fadeInAnimation};
`

const RightMiddleInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(240%, -50%);
  width: 85px;
`
const RightTopInsideDiv = styled.div<AnimationProps>`
  animation: ${hideRhombsAnimation}, ${fadeInAnimation};
`

const RightTopInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(180%, -115%);
  width: 85px;
`
const LeftTopInsideDiv = styled.div<AnimationProps>`
  animation: ${hideRhombsAnimation}, ${fadeInAnimation};
`

const LeftTopInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-280%, -115%);
  width: 85px;
`

const GlowLayer = styled.div<AnimationProps>`
  animation: ${fadeInBackGlowAnimation};
`

const Glow = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
`

const MainMiddleShape = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  animation: ${toTopAnimation};
`

const MiddleLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 713px;
`

const DroidMask = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 713px;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
`
const Droid = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -47%);
  transform-origin: top center;
  width: 390px;
  animation: ${hideDroidAnimation}, ${moveDroidToTopAnimation},
    ${scaleUpAndDownAnimation};
  transform-origin: 0 30%;
`

const OverlappingDroidLayer = styled.div<AnimationProps>`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
`

const LeftMiddleInsideDiv = styled.div<AnimationProps>`
  animation: ${hideRhombsAnimation}, ${fadeInAnimation};
`
const LeftMiddleInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-600%, -50%);
  width: 46px;
`

const LeftBottomInsideDiv = styled.div<AnimationProps>`
  animation: ${hideRhombsAnimation}, ${fadeInAnimation};
`

const LeftBottomInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-230%, 60%);
  width: 85px;
`
const RightBottomInsideDiv = styled.div<AnimationProps>`
  animation: ${hideRhombsAnimation}, ${fadeInAnimation};
`

const RightBottomInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(130%, 60%);
  width: 85px;
`

const OutsideLayerRight = styled.div<AnimationProps>`
  width: 100%;
  position: absolute;
  top: 50%;
  right: 0%;
  animation: ${rightAnimation};
`

const RightTopOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(940%, -500%);
  width: 40px;
`
const RightMiddleOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(1040%, 50%);
  width: 50px;
`
const RightBottomOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(625%, 295%);
  width: 85px;
`

const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  text-align: center;
  /* @media only screen and (${Layout.tablet}) {
    bottom: 60%;
  } */
`

const Headline = styled.h1`
  z-index: 10;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 2rem;
  margin-block-start: 0em;
  margin-block-end: 0em;

  @media only screen and (${Layout.tablet}) {
    font-size: 3rem;
  }
`

export default EntrySection
