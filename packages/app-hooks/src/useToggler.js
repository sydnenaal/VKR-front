import { useState, useCallback } from 'react'
import { not } from 'ramda'

export const useToggler = (defaultValue) => {
  const [toggleState, setToggleState] = useState(defaultValue)

  const handleToggle = useCallback(() => setToggleState(not), [])

  return [toggleState, handleToggle]
}
