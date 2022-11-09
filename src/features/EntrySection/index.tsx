import styled from 'styled-components'
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

const EntrySection = () => {
  return (
    <>
      <Wrapper>
        <Background src={background} alt='background' />

        <BehindMainLayer>
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

        <MainDroidLayer>
          <MainMiddleShape src={mainMiddleShape} alt='main_middle_shape' />
          <Droid src={droid} alt='droid' />
        </MainDroidLayer>

        <OverlappingDroidLayer>
          <LeftMiddleInside src={leftMiddleShape1} alt='left_middle_inside' />
          <LeftBottomInside src={leftMiddleShape2} alt='left_bottom_inside' />
          <RightBottomInside
            src={rightMiddleShape1}
            alt='right_bottom_inside'
          />
        </OverlappingDroidLayer>

        <OutsideLayer>
          <LeftTopOutside src={shape1} alt='left_top_outside' />
          <LeftMiddleOutside src={shape6} alt='left_middle_outside' />
          <LeftBottomOutside src={shape3} alt='left_bottom_outside' />
          <RightTopOutside src={shape2} alt='right_top_outside' />
          <RightMiddleOutside src={shape5} alt='right_middle_outside' />
          <RightBottomOutside src={shape4} alt='right_bottom_outside' />
        </OutsideLayer>
      </Wrapper>
    </>
  )
}

const GlowLayer = styled.div``
const BehindMainLayer = styled.div``
const MainDroidLayer = styled.div``
const OverlappingDroidLayer = styled.div``
const OutsideLayer = styled.div``

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Background = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const MainMiddleShape = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
`

const Droid = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
`

const Glow = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
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
const RightBottomInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(130%, 60%);
  width: 85px;
`
const RightMiddleInside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(240%, -50%);
  width: 85px;
`

const LeftTopOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-1040%, -705%);
  width: 30px;
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
const LeftBottomOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-940%, 560%); // 560
  width: 45px;
`
const LeftMiddleOutside = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-1140%, 15%);
  width: 45px;
`

export default EntrySection
