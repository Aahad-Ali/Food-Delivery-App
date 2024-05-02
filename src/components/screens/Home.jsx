import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Card from '../Card'
import Carosuel from '../Carosuel'
const Home = () => {
  return (
    <>
      <div><Header /></div>
      <div><Carosuel/></div>
      <div>
    <Card/>
      </div>
      <div className='mt-5'><Footer /></div>
    </>
  )
}

export default Home