import React, { Component } from 'react'
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts'
import records from './mock/records'

export class GSPCChart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            records
        }
    }
    
  render() {
    return (
      <div style={{ paddingTop: '20px' }}>
        {/* <ResponsiveContainer width={700} height="80%"> */}
          <LineChart
            width={1200}
            height={650}
            data={records}
            margin={{ top: 10, right: 55, bottom: 10, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Open" stroke="#8884d8" />
          </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    )
  }
}

export default GSPCChart
