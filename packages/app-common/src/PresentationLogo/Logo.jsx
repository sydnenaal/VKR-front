import React, { memo } from 'react'

import { Logo } from './styled'

export const PresentationLogo = memo(({ margin, fontSize, letterSpacing }) => {
  return (
    <Logo margin={margin} fontSize={fontSize} letterSpacing={letterSpacing}>
      Time Manager
    </Logo>
  )
})
