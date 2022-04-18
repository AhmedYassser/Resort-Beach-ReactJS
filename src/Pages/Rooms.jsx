import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../Componants/Banner'
import Hero from '../Componants/Hero'
import { RoomsContainer } from '../Componants/RoomsContainer'


export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  )
}
