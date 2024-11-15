import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <>
      <Navbar bg="success" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-utensils"></i>
            
            <Link to={'/'} style={{textDecoration:"none",color:"white",marginLeft:"10px"}}>FOOD CIRCLE</Link></Navbar.Brand>
          <input type="text" className='form-control w-25 me-5' 
          onChange={(e)=>dispatch(search(e.target.value))}
          />
          <img
            width={'50pz'}
            height={'50px'}
            src="https://img.freepik.com/premium-vector/restaurant-icon-concept-with-icon-design_24911-17835.jpg" alt="" />

        </Container>
      </Navbar>
    </>
  )
}

export default Header