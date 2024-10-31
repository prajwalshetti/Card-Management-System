import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
<nav className="bg-slate-300 w-full font-semibold">
  <div className="container">
    <div className="flex justify-around items-center pt-6 m-0">
        <ul className="flex space-x-10">
          <li>
            <img  className="w-15 h-10" src="data:image/jpeg;base64,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" alt="Logo" />
          </li>
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-600 no-underline">Create Post</Link>
          </li>
          <li>
            <Link to="/all" className="text-gray-800 hover:text-blue-600 no-underline">See All Users</Link>
          </li>
        </ul>
      </div>

  </div>
</nav>

    </div>
  )
}

export default Navbar