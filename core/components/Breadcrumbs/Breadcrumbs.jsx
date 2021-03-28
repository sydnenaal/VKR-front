import React, { useMemo, memo } from 'react'

import BreadcrumbsCore, { BreadcrumbsItem } from '@atlaskit/breadcrumbs'
import PageHeader from '@atlaskit/page-header'

export const Breadcrumbs = memo(({ title, source = [] }) => {
  const brandcrumbs = useMemo(() => {
    return (
      <BreadcrumbsCore>
        {source.map(({ text, key }) => (
          <BreadcrumbsItem text={text} key={key} />
        ))}
      </BreadcrumbsCore>
    )
  }, [])

  return <PageHeader breadcrumbs={brandcrumbs}>{title}</PageHeader>
})

Breadcrumbs.displayName = 'Breadcrumbs'
