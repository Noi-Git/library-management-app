import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const MetaData = ({ title }) => {
  return (
    // use HelmetProvider to fix error 'Using UNSAFE_componentWillMount in strict mode..'
    <HelmetProvider>
      <Helmet>
        <title>{`${title}`}</title>
      </Helmet>
    </HelmetProvider>
  )
}

export default MetaData
