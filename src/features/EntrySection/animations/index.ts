import { keyframes, css } from 'styled-components'

export interface AnimationProps {
  animationLength?: string
  animationSecondLength?: string
  animationDelay?: string
}

const moveFromLeftToRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`
const moveFromRightToLeft = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0%);
  }
`
const moveFromBottomToTop = keyframes`
  0% {
    transform: translate(-50%, 50%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`

const hideDroid = keyframes` 
    0% {
      transform: translate(-50%, 50%);
    }
    100% {
      transform: translate(-50%, 50%);
    }
`

const hideRhombs = keyframes`
      0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
`

const fadeIn = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const onEntryScaleInsideRhombs = keyframes`
  0% {
    opacity: 0;
    scale: 5;
  }
  100% {
    opacity: 1;
    scale: 1;
  }`

const scaleUpAndDown = keyframes`
0% {
  scale: 1;
}
50% {
  scale: 1.05;
}
100% {
  scale: 1;
}`

export const leftAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${moveFromLeftToRight} ${animationLength}
`

export const rightAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${moveFromRightToLeft} ${animationLength}
`

export const toTopAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${moveFromBottomToTop} ${animationLength}
`

export const hideDroidAnimation = () => css`
  ${hideDroid} 2s linear 0s
`

export const hideRhombsAnimation = ({
  animationDelay = '1s',
}: AnimationProps) => css`
  ${hideRhombs} ${animationDelay} linear 0s
`

export const moveDroidToTopAnimation = () => css`
  ${moveFromBottomToTop} 1s linear 1s
`

export const showInsideRhombAnimation = ({
  animationLength = '0.25s',
  animationDelay = '1s',
}: AnimationProps) => css`
  ${onEntryScaleInsideRhombs} ${animationLength} linear ${animationDelay}
`

export const scaleUpAndDownAnimation = () => css`
  ${scaleUpAndDown} 5s infinite linear 3.5s
`

export const fadeInAnimation = ({
  animationSecondLength = '1s',
  animationDelay = '1s',
}: AnimationProps) => css`
  ${fadeIn} ${animationSecondLength} linear ${animationDelay}
`

export const fadeInBackGlowAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${fadeIn} ${animationLength}
`

export const lengthOfTime = {
  sec025: '0.25s',
  sec05: '0.5s',
  sec1: '1s',
  sec2: '2s',
  sec21: '2.1s',
  sec22: '2.2s',
  sec23: '2.3s',
  sec24: '2.4s',
  sec25: '2.5s',
  sec26: '2.6s',
  sec3: '3s',
  sec4: '4s',
  sec5: '5s',
}
