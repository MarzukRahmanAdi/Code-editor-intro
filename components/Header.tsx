import React from 'react'

function Header() {
  return (
    <div>
 <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown flex">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Courses</a></li>
        <li><a>Practice</a></li>
        <li><a>Deploy</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl logo font-bold ">HACKED</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li> 
      <li><a>Courses</a></li>
      <li><a>Practice</a></li>
      <li><a>Deploy</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Login</a>
  </div>
</div>
    </div>
  )
}

export default Header
