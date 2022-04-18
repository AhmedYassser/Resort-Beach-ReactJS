import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../Componants/Banner'
import { FeaturedRooms } from '../Componants/FeaturedRooms'
import Hero from '../Componants/Hero'
import { Services } from '../Componants/Services'
import { useRoomContext } from '../Context'

export const Home = () => {

  
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>   
      <Services />
      <FeaturedRooms />
       </>
  )
}
