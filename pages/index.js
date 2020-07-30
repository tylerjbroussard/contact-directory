import React from 'react'
import {useEffectOnce} from 'react-use'

import {
  Box,
  Container,
  Typography,
} from '@material-ui/core'

import ContactDataTable from '../components/ContactDataTable'
import Header from '../components/Header'

const Home = () => {

  const [ contactData, setContactData ] = React.useState([])

  useEffectOnce(() => {
    const testData = require('../data/Local-Prosecutors-Tracker.json')

    setContactData(testData)
  })

  return (
    <>

      <Header />

      <Container>

        <Box py={4}>

          <Box pb={4}>
            <Typography component="h1" display="block" padding={3} variant="h1">Prosecutor Directory</Typography>
          </Box>

          {contactData ? (
              <ContactDataTable contactData={contactData} />
          ):(
            <div>Loading...</div>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Home
