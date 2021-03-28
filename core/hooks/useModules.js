import { internalModules } from '../pages'

import { useExternalModules } from './useExternalModules'

export function useModules() {
  const externalModules = useExternalModules()

  const preparedModules = [
    ...internalModules.map((module) => ({ ...module, type: 'internal' })),
    ...externalModules.map((module) => ({ ...module, type: 'external' })),
  ]

  return preparedModules
}
