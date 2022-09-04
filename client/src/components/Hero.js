import React, { useEffect } from 'react'

const Hero = () => {

  async function getData() {
    const response = await fetch("http://localhost:8000/");
    const data = await response.json();

    console.log(data);
  }

  useEffect(()=> {
    getData();
  }, [])


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