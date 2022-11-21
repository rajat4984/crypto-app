import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CoinCard from "./CoinCard"

function CoinApp() {
  return (
    <div>
        <Navbar/>
        <CoinCard/>
        <Footer/>
    </div>
  )
}

export default CoinApp