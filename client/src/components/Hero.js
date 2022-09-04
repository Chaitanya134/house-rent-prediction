import React from 'react'

const Hero = () => {

  return (
    <section className='hero-section'>
        <div>
            <h1>Predict House Rent</h1>
            <p>Get the approximate house rent based on some attributes.</p>
            <button>Predict</button>
        </div>
        <img src="/house.png" alt='house' />
    </section>
  )
}

export default Hero