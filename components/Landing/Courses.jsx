import React from 'react'
import Card from '../Card'

function Courses() {
  return (
    <div className='mt-52'>
      <h1 style={{lineHeight:"1.1"}} className='text-5xl text-center   my-10  font-semibold text-white'>Before using our product the procedure </h1>

    <div className='flex md:flex-row flex-col space-y-10 lg:space-y-0 mx-0 justify-center items-center px-5 lg:space-x-10 lg:mx-10  xl:mx-40'>
        <Card title="Codinery" desc="Start your web development practice today, from here." imgLink="/images/Programming-rafiki 2.png" souceLink={"https://code.ionicbyte.com/"} cardclass="card_bg3" />
      
    </div>

    </div>

  )
}

export default Courses