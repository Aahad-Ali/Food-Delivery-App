import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Card from '../Card'
const Home = () => {
  return (
    <>
      <div className='mb-5'><Header /></div>
      <div>
    <Card/>
      </div>
      <div className='mt-5'><Footer /></div>
    </>
  )
}

export default Home