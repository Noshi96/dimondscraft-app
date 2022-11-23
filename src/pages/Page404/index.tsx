import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import ErrorSection from '../../features/ErrorSection'
import { scrollToSection } from '../../utils/scrollToSection'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'

const Page404 = () => {
  useLayoutEffect(() => {
    scrollToSection('entryPageEndHook')
  }, [])

  return (
    <GradientFullWidthContainer>
      <ErrorSection />
    </GradientFullWidthContainer>
  )
}

const GradientFullWidthContainer = styled(AdjustingSection)`
  width: 100%;
  max-width: 100%;
  background: linear-gradient(#080924, #000000);
  padding-top: 4rem;
`

export default Page404
