import React, { Component } from 'react'
import ReactTable from 'react-table'
import records from './mock/records'
import 'react-table/react-table.css'
import './tabs.css'

class GSPCTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      records,
    }

    this.columns = [
      {
        Header: 'Date',
        accessor: 'Date',
        Cell: (row) => {
          return this.getUpdatedDate(row.original.Date)
        },
      },
      {
        Header: 'Open',
        accessor: 'Open',
        Cell: (row) => {
          return row.original.Open.toFixed(2)
        },
      },
      {
        Header: 'High',
        accessor: 'High',
        Cell: (row) => {
          return row.original.High.toFixed(2)
        },
      },
      {
        Header: 'Low',
        accessor: 'Low',
        Cell: (row) => {
          return row.original.Low.toFixed(2)
        },
      },
      {
        Header: 'Close',
        accessor: 'Close',
        Cell: (row) => {
          return row.original.Close.toFixed(2)
        },
      },
      {
        Header: 'Volume',
        accessor: 'Volume',
      },
    ]
  }
  getUpdatedDate(date) {
    const dateArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const d = new Date(date)
    return `${dateArr[d.getMonth()]}  ${d.getDate()}, ${d.getFullYear()}`
  }

  render() {
    const { records } = this.state
    return (
      <div style={{ paddingTop: '20px'}}>
        <ReactTable
          data={records}
          columns={this.columns}
          defaultPageSize={20}
          // pageSizeOptions = {[2,4, 6]}
        />
      </div>
    )
  }
}

export default GSPCTable
