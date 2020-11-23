import React from 'react'
import records from './mock/records'
import './card.css'

function gcpcCards() {
  return (
    <div className="cards-container">
      <ul>
        <li>
          <div className="card card-header">
            <div className="Date">Date</div>
            <div className="Open">Open</div>
            <div className="High">High</div>
            <div className="Low">Low</div>
            <div className="Close">Close</div>
            <div className="Volume">Volume</div>
          </div>
        </li>
        {records.map((record) => {
          return (
            <li>
              <div className="card">
                <div className="Date">{record.Date}</div>
                <div className="Open">{record.Open}</div>
                <div className="High">{record.High}</div>
                <div className="Low">{record.Low}</div>
                <div className="Close">{record.Close}</div>
                <div className="Volume">{record.Volume}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default gcpcCards
