import React from 'react'

import { useListContext } from '../List/ListProvider'

interface TableProps {
  data: Record<string, string>[]
  columns: Record<string, string>
}

const Table: React.FC<TableProps> = ({data, columns}) => {
  const {selectedRow, setSelectedRow} = useListContext()

  return (
    <div style={{padding: 10}}>
      <table
        style={{border: '1px solid #333', width: '100%', borderCollapse: 'collapse'}}
        cellPadding="0"
        cellSpacing="0"
      >
        <thead>
          <tr>
            {Object.entries(columns).map(([key, value]) => (
              <td key={key} style={{backgroundColor: '#CCC', border: '1px solid #999'}}>
                {value}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              onClick={() => setSelectedRow(row)}
              style={{cursor: 'pointer', backgroundColor: selectedRow?.name === row.name ? 'yellow' : 'white'}}
            >
              {Object.entries(row).map(([key, value]) => (
                <td key={key} style={{border: '1px solid #999', padding: 5}}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
