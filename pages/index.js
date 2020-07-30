import React from 'react'
import {useEffectOnce} from 'react-use'

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
} from '@material-ui/core'

import Head from 'next/head'

import ContactDataTable from '../components/ContactDataTable'

const Home = () => {

  const [ contactData, setContactData ] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  useEffectOnce(() => {
    const testData = require('../data/Local-Prosecutors-Tracker.json')

    setContactData(testData)
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <Head>
        <title>Prosecutor Dashboard | Grassroots Law Project</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5e7662fe45630059ae9347cf/1588662098088-YIU53RDZNTCCDI2JU0V4/ke17ZwdGBToddI8pDm48kFHuvyq-Sr_o8e-dvP-jC25Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIqfoiNJC-Ls_8uKMOnfDCy5Jt-ds5cksGKcyU-MtDa7Q/favicon.ico?format=100w"></link>
      </Head>

      <Container>

        <h1>Directory</h1>

          {contactData ? (
            <ContactDataTable
              contactData={contactData}
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        ):(
          <div>Loading...</div>
        )}
      </Container>
    </>
  )
}

export default Home
