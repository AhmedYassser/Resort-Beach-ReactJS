import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../Componants/Banner'
import Hero from '../Componants/Hero'

export const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  )
}
