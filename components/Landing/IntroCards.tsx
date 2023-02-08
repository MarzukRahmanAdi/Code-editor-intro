import React from 'react'
import Card from '../Card'

function IntroCards() {
  return (
    <div className='mt-32'>
    <div>
      <h1 style={{lineHeight:"1.1"}} className='text-5xl text-center   my-10  font-semibold text-white'>How this goes?</h1>

    <div className='flex md:flex-row flex-col space-y-10 lg:space-y-0 mx-0 justify-center items-center px-5 lg:space-x-10 lg:mx-10  xl:mx-40'>
        <Card
         title="Frontend" desc="Development of the graphical user interface of a website" imgLink="https://i.ibb.co/8bm8r7D/Programming-pana-1-1.png" souceLink={"/asdf"} cardclass="primary-card" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

        <Card title="Backend" desc="Developing server-side systems and access data through APIs" imgLink="/images/Programming-amico 2.png" souceLink={"/asdf"} cardclass="card_bg2" />
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

        <Card title="Full-Stack" desc="Building complete web apps, both frontend and backend" imgLink="/images/Programming-rafiki 2.png" souceLink={"/asdf"} cardclass="card_bg3" />
      
    </div>

    </div>
    </div>
  )
}

export default IntroCards