import React from 'react'

function Footer() {
  return (
    <div>
       
<footer className="footer flex w-screen justify-around p-10 bg-neutral text-neutral-content">
  <div className='text-center'>
    <span className="footer-title">Location</span> 
    <a className="link link-hover">Dhaka, Bangladesh</a>
  </div> 
  <div>
    <span className="footer-title">Around The Web</span> 
    <a href='https://www.facebook.com/ionicbyte/' target={"_blank"}  className="link link-hover">Facebook</a>
    <a href='https://www.instagram.com/ionicbyte/' target={"_blank"} className="link link-hover">Instagram</a>

  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  
</footer>

<div className=''> 
    {/* <hr className='   place-items-center ' /> */}
    <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"/>

</div>

    <div>
        <p className='text-gray-600 text-center py-4'>©2020 Marzuk Rahman Adi</p>
    </div>

    </div>
  )
}

export default Footer