import { keyframes, css } from 'styled-components'

export interface AnimationProps {
  animationLength?: string
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

const onEntryScaleInsideRhombs = keyframes`
  0% {
    opacity: 0;
    scale: 3.5;
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

export const moveDroidToTopAnimation = () => css`
  ${moveFromBottomToTop} 1s linear 1s
`

export const showInsideRhombAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${onEntryScaleInsideRhombs} ${animationLength}
`

export const scaleUpAndDownAnimation = () => css`
  ${scaleUpAndDown} 5s infinite linear 3.5s
`

export const animationLength = '2s'
export const animationLength3s = '3s'
