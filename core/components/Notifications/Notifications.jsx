import React, { memo, useMemo } from 'react'

import WarningIcon from '@atlaskit/icon/glyph/warning'
import ErrorIcon from '@atlaskit/icon/glyph/error'

import Banner from '@atlaskit/banner'

import { useNotifications } from '@vkr/app-notifications'

import { NotificationsContainer, NotificationContainer } from './styled'

const iconsHash = {
  warning: <WarningIcon label="Warning icon" secondaryColor="inherit" />,
  error: <ErrorIcon label="Error icon" secondaryColor="inherit" />,
  announcement: <></>,
}

export const Notifications = memo(() => {
  const { notificationsQueue, deleteNotification } = useNotifications()

  const notifications = useMemo(
    () =>
      notificationsQueue.map(({ type, message, id, isOpen }) => (
        <NotificationContainer key={id} onClick={() => deleteNotification(id)} isOpen={isOpen}>
          <Banner appearance={type} icon={iconsHash[type]} isOpen={isOpen}>
            {message}
          </Banner>
        </NotificationContainer>
      )),
    [notificationsQueue, deleteNotification],
  )

  return <NotificationsContainer>{notifications}</NotificationsContainer>
})

Notifications.displayName = 'Notifications'
