import React from 'react'

import createUseContext from '../../utils/useCreateStore'

export type ListState = {
  selectedRow?: Record<string, any>
}

const initialState: ListState = {
  selectedRow: undefined,
}

export const useListContext = createUseContext('ListContext', () => {
  const [state, setState] = React.useState(initialState)

  const setSelectedRow = (row: Record<string, any>) => setState((prev) => ({...prev, selectedRow: row}))

  return {
    selectedRow: state.selectedRow,
    setSelectedRow,
  }
})

export const ListContextProvider = useListContext.Provider
