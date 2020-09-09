import React from 'react'

interface PaginationProps {
  current: number
  total: number
}

const Pagination: React.FC<PaginationProps> = ({current, total}) => {
  if (total === 0) return null

  console.log(total)

  return (
    <div style={{display: 'flex', padding: 10}}>
      {Array.from(Array(total).keys()).map((pageNumber) => (
        <div
          style={{
            padding: 15,
            marginRight: 10,
            borderRadius: 5,
            color: 'white',
            background: pageNumber === current ? 'blue' : '#999',
          }}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  )
}

export default Pagination
