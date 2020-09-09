import * as React from 'react'

import Pagination from '../Pagination/Pagination'
import ListHeader from './ListHeader'
import { ListContextProvider } from './ListProvider'
import ListTable from './ListTable'

export interface ListProps {
  title?: string
  pagination?: 'top' | 'bottom' | 'none' | 'both'
  data: Record<string, string>[]
  columns: Record<string, string>
}

const List: React.FC<ListProps> = ({title, pagination = 'bottom', data, columns}) => {
  const paginationProps = {
    current: 1,
    total: data.length,
  }

  const topPaginationNode = (pagination === 'top' || pagination === 'both') && <Pagination {...paginationProps} />
  const bottomPaginationNode = (pagination === 'bottom' || pagination === 'both') && <Pagination {...paginationProps} />

  return (
    <ListContextProvider>
      <ListHeader title={title} />
      {topPaginationNode}
      <ListTable data={data} columns={columns} />
      {bottomPaginationNode}
    </ListContextProvider>
  )
}

export default List
