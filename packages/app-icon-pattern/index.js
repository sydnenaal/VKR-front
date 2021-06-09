import React, { memo } from 'react'

export const ModuleIcon = memo(({ asset, module }) => (
  <img src={asset} width="24px" height="24px" alt={`icon_${module}`} />
))

ModuleIcon.displayName = 'ModuleIcon'
