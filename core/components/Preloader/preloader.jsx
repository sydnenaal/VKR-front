import React from 'react'

import { PreloaderContainer } from './styled'
import { PresentationLogo, SpinnerLoader } from '@vkr/app-common'

export function PreloaderPage() {
  return (
    <PreloaderContainer>
      <PresentationLogo />
      <SpinnerLoader />
    </PreloaderContainer>
  )
}
