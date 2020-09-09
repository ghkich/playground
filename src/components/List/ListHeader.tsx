import React from 'react'

import { useListContext } from './ListProvider'

interface ListHeaderProps {
  title?: string
}

const ListHeader: React.FC<ListHeaderProps> = ({title}) => {
  const {selectedRow} = useListContext()

  return (
    <div style={{padding: 20}}>
      {title && <h1>{title}</h1>}
      <span>
        Usuário selecionado: <b>{selectedRow ? selectedRow.name : 'Nenhum'}</b>
      </span>
    </div>
  )
}

export default ListHeader
