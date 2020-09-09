import React from 'react'

interface ListTableProps {
  data: Record<string, string>[]
  columns: Record<string, string>
}

const ListTable: React.FC<ListTableProps> = ({data, columns}) => {
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
            <tr>
              {Object.entries(row).map(([key, value]) => (
                <td key={key} style={{border: '1px solid #999'}}>
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

export default ListTable
