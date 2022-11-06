import React from 'react'
import Navbar from './Navbar'
import Box from './Box'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className = 'grid grid-rows-3 grid-flow-col'>
      <Box 
      imgSrc='https://m.media-amazon.com/images/I/810BRQazsqL.__AC_SX300_SY300_QL70_FMwebp_.jpg' 
      categoryName="MROCO Mouse Pad"
      review="4.6 stars"
      />
    </div>
    
    <div className = 'grid grid-rows-3 grid-flow-col'>
      <Box 
      imgSrc='https://m.media-amazon.com/images/I/51AEckoWVHL._AC_UX679_.jpg' 
      categoryName="Under Armour Men's Tech 2.0 Short-Sleeve T-Shirt"
      review="5.0 stars"
      />
    </div>
    
    <div className = 'grid grid-rows-3 grid-flow-col'>
      <Box 
      imgSrc='https://m.media-amazon.com/images/I/617FFRO3vcL._FMwebp__.jpg' 
      categoryName="Apple iPhone 13 Pro (128GB, Silver) [Locked] + Carrier Subscription      "
      review="5.0 stars"
      />
    </div>
    
    <div className = 'grid grid-rows-3 grid-flow-col'>
      <Box 
      imgSrc='https://m.media-amazon.com/images/I/61Fi9EVqM5L._AC_SL1250_.jpg' 
      categoryName="Serta Rane Convertible Sofa Bed, 66.1"
      review="4.8 stars"
      />
    </div>
    
    <div className = 'grid grid-rows-3 grid-flow-col'>
      <Box 
      imgSrc='https://m.media-amazon.com/images/I/41ppcO7H0WL._AC_.jpg' 
      categoryName="Mr. Coffee 2129512, 5-Cup Mini Brew Switch Coffee Maker, Black
      "
      review="4.8 stars"
      />
    </div>
    </div>
  )
}
