import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fechResturant } from '../redux/restaurantSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechResturant())
  }, [])
  const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant.restaurants);
  console.log("1");
  console.log(allRestaurant);
  return (
    <>
      <Row className='mt-5   '>
        {
          allRestaurant?.length > 0 ?
            allRestaurant.map((restaurant) => (
              <Col className='px-5 py-4   ' sm={6} md={3} lg={3}>
                <RestCard restaurant={restaurant}  />
              </Col>
            )) :
            <p>no Restaurant found</p>


        }

      </Row>
    </>
  )
}

export default Home