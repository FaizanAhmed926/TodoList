import React from 'react'

const Navbar = () => {
  return (
<nav className=' bg-slate-700 flex justify-between  items-center w-screen p-3'>
    <span className=' text-sky-200 text-4xl font-semibold'>TodoList</span>
    <ul className=' w-1/3 flex justify-evenly items-center text-white text-xl cursor-pointer'>
        <li className=' hover:text-purple-300 hover:scale-110'>
         Home
        </li>
        <li className=' hover:text-purple-300 hover:scale-110'>
            Your Task
        </li>
    </ul>
</nav>
  )
}

export default Navbar
