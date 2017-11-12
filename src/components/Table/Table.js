import React, { PureComponent } from 'react'
import { get } from 'lodash'
import uuid from 'uuid'
import t from 'prop-types'

class Table extends PureComponent {
  renderHeaderColumn = column => <th>{column.label}</th>

  renderRow = row => {
    const { columns, actions } = this.props

    return (
      <tr key={uuid.v1()}>
        {columns.map(column => {
          const value = get(row, column.dataKey)

          return <td key={uuid.v1()}>{value}</td>
        })}

        <td>
          {Object.keys(actions).map(key => {
            const { handler, label } = actions[key]

            return <button onClick={() => handler(row.id)}>{label}</button>
          })}
        </td>
      </tr>
    )
  }

  render() {
    const { rows, columns } = this.props

    return (
      <table>
        <thead>
          <tr>
            {columns.map(this.renderHeaderColumn)}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{rows.map(this.renderRow)}</tbody>
      </table>
    )
  }
}

Table.propTypes = {
  rows: t.arrayOf(t.object),
  columns: t.arrayOf(
    t.shape({
      dataKey: t.string,
      label: t.string
    })
  ),
  actions: t.object
}

export default Table
