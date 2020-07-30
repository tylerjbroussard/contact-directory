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
  const [ filteredContactData, setFilteredContactData ] = React.useState([])

  useEffectOnce(() => {
    const testData = require('../data/Local-Prosecutors-Tracker.json')

    setContactData(testData)
    setFilteredContactData(testData)
  })

  const handleFilteredData = (filters) => {
    if (filters.type == 'State' && filters.value === 'All') {
      setFilteredContactData(contactData)
    } else {
      const filteredData = contactData.filter(data => data[filters.type] === filters.value)
      setFilteredContactData(filteredData)
    }
  }

  return (
    <>

      <Header />

      <Container>

        <Box py={4}>

          <Box pb={4}>
            <Typography component="h1" display="block" padding={3} variant="h1">Prosecutor Directory</Typography>
          </Box>

          {contactData ? (
              <ContactDataTable contactData={filteredContactData} handleFilteredData={handleFilteredData} />
          ):(
            <div>Loading...</div>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Home
