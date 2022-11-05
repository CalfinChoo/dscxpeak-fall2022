import React from 'react'
import Navbar from './Navbar'
import Box from './Box'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <br/>
      Payment History
    <br/>
    <div className = 'grid grid-rows-3 grid-flow-col'>
      <Box categoryName="bebe"/>
      <Box categoryName="bebe"/>
      <Box categoryName="bebe"/>
    </div>
    <div className = 'grid grid-rows-3 grid-flow-col'>
    <Box categoryName="bebe"/>
    <Box categoryName="bebe"/>
    <Box categoryName="bebe"/>
    </div>
    <div className = 'grid grid-rows-3 grid-flow-col'>
    <Box categoryName="bebe"/>
    <Box categoryName="bebe"/>
    <Box categoryName="bebe"/>
    </div>
    <div className = 'grid grid-rows-3 grid-flow-col'>
    <Box categoryName="bebe"/>
    <Box categoryName="bebe"/>
    <Box categoryName="bebe"/>
    </div>
    </div>
  )
}
