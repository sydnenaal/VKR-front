import React, { useCallback, memo } from 'react'

import { useAuth } from '@vkr/app-auth'

import { AuthComponent } from '../../components'

export const AuthContainer = memo(() => {
  const { loading, loginUser } = useAuth()

  const handleSubmit = useCallback(({ login, password }) => loginUser(login, password), [loading, loginUser])

  return <AuthComponent loading={loading} onSubmit={handleSubmit} />
})
