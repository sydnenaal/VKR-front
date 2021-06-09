import React, { memo } from 'react'

import { CardContainer, Divider, Title } from './styled'

export const Card = memo(({ children, title, ...props }) => (
  <CardContainer {...props}>
    {title && (
      <>
        <Title>{title}</Title>
        <Divider />
      </>
    )}
    {children}
  </CardContainer>
))

Card.displayName = 'Card'
