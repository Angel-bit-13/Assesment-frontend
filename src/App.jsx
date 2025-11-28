import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import AddProduct from './components/AddProduct'


const App = () => {
  return (
    <>
    <Router>
      <nav className='bg-cyan-950 shadow-lg'>
        <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
          <ul className='flex space-x-6 py-4'>
            <li>
              <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
            </li>
            
            <li>
              <Link to="/addproduct" className='text-white hover:text-gray-300'>Add Product</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Routes */}

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/addproduct' element = {<AddProduct />}/>
      </Routes>
      


    </Router>
    </>
  )
}

export default App
