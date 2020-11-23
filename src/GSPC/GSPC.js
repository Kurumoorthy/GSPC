import React, { Component } from 'react'
import Tabs from './Tabs'
import Panel from './Panel'
import GSPCTable from './gspcTable'
import GSPCChart from './gspcChart'
import GSPCCards from './gcpcCards'

export class GSPC extends Component {
  render() {
    return (
      <div>
        <Tabs selected={0}>
          <Panel title="Summary"><GSPCTable /></Panel>
          <Panel title="Cards"><GSPCCards /></Panel>
          <Panel title="Chart"><GSPCChart /></Panel>
        </Tabs>
      </div>
    )
  }
}

export default GSPC
