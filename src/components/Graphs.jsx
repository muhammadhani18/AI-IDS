import React from 'react'
import GraphComponent from './GraphComponent'
import BarGraph from './BarGraph'
import PieChartComponent from './PieChart'

function Graphs() {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
    <br/>
    <h1 className="mb-4" style={{ color: 'black' }}>
        Distinct IP addresses
    </h1>
    <div className="w-50">
      <GraphComponent/>
      <BarGraph/>
    </div>
    
    <PieChartComponent/>
  </div>
  )
}

export default Graphs