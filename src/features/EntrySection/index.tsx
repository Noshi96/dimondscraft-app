import styled from 'styled-components'
import { useState, useEffect } from 'react'
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
  animationLength,
  animationLength3s,
  leftAnimation,
  rightAnimation,
  toTopAnimation,
  hideDroidAnimation,
  moveDroidToTopAnimation,
  scaleUpAndDownAnimation,
  showInsideRhombAnimation,
} from './animations'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const EntrySection = () => {
  const [text, setText] = useState<string>('')

  const textToDisplay = 'We Forge The Future'

  useEffect(() => {
    async function typeText() {
      await delay(2500)
      let i = 0
      const interval = setInterval(async () => {
        let newLetter = textToDisplay[i++]
        setText((prev) => prev.concat(newLetter))
        if (i === textToDisplay.length) {
          clearInterval(interval)
        }
      }, 140)
    }
    typeText()
  }, [])

  return (
    <>
      <Wrapper>
        <Background src={background} alt='background' />
        <Content>
          <OutsideLayerLeft animationLength={animationLength}>
            <LeftTopOutside src={shape1} alt='left_top_outside' />
            <LeftMiddleOutside src={shape6} alt='left_middle_outside' />
            <LeftBottomOutside src={shape3} alt='left_bottom_outside' />
          </OutsideLayerLeft>

          <MainDroidLayer>
            <BehindMainLayer animationLength={animationLength3s}>
              <RightMiddleInside
                src={rightMiddleShape2}
                alt='right_middle_inside'
              />
              <RightTopInside src={rightMiddleShape1} alt='right_top_inside' />
              <LeftTopInside src={rightMiddleShape1} alt='left_top_inside' />
            </BehindMainLayer>

            <GlowLayer>
              <Glow src={glow1} alt='glow1' />
              <Glow src={glow2} alt='glow2' />
              <Glow src={glow3} alt='glow3' />
            </GlowLayer>

            <MainMiddleShape
              animationLength={animationLength}
              src={mainMiddleShape}
              alt='main_middle_shape'
            />
            <DroidMask>
              <Droid src={droid} alt='droid' />
            </DroidMask>

            <OverlappingDroidLayer animationLength={animationLength3s}>
              <LeftMiddleInside
                src={leftMiddleShape1}
                alt='left_middle_inside'
              />
              <LeftBottomInside
                src={leftMiddleShape2}
                alt='left_bottom_inside'
              />
              <RightBottomInside
                src={rightMiddleShape1}
                alt='right_bottom_inside'
              />
            </OverlappingDroidLayer>
          </MainDroidLayer>

          <OutsideLayerRight animationLength={animationLength}>
            <RightTopOutside src={shape2} alt='right_top_outside' />
            <RightMiddleOutside src={shape5} alt='right_middle_outside' />
            <RightBottomOutside src={shape4} alt='right_bottom_outside' />
          </OutsideLayerRight>
        </Content>
        <TextWrapper>
          <Headline>{`|${text}|`}</Headline>
        </TextWrapper>
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
  height: 100%;
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
  animation: ${showInsideRhombAnimation}, ${scaleUpAndDownAnimation};
`

const RightMiddleInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(240%, -50%);
  width: 85px;
`

const RightTopInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(180%, -115%);
  width: 85px;
`

const LeftTopInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-280%, -115%);
  width: 85px;
`

const GlowLayer = styled.div``

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
  animation: ${showInsideRhombAnimation}, ${scaleUpAndDownAnimation};
`

const LeftMiddleInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-600%, -50%);
  width: 46px;
`

const LeftBottomInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-230%, 60%);
  width: 85px;
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
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media only screen and (${Layout.tablet}) {
    top: 90%;
  }
`

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 3rem;

  @media only screen and (${Layout.tablet}) {
    font-size: 4rem;
  }
`

export default EntrySection
