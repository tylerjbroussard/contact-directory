import React from 'react'

import {
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
import { makeStyles, useTheme } from '@material-ui/core/styles'

import TablePaginationControls from './components/TablePaginationControls'

const ContactDataTable = ({ contactData } = props) => {

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const theme = useTheme()

  const useStylesTable = makeStyles((theme) => ({
    tableHeading: {
      background: theme.palette.background.default,
      fontSize: '12px',
      textTransform: 'uppercase',
    },
  }))
  const classes = useStylesTable()

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Prosecutor Contact Data Table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeading} >State</TableCell>
            <TableCell className={classes.tableHeading} align="left">District/County</TableCell>
            <TableCell className={classes.tableHeading} align="left">Title</TableCell>
            <TableCell className={classes.tableHeading} align="left">Name</TableCell>
            <TableCell className={classes.tableHeading} align="left">Email</TableCell>
            <TableCell className={classes.tableHeading} align="left">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
          ? contactData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : contactData
        ).map((row) => {
            // "State"
            // "District/County"
            // "Title"
            // "First"
            // "Last Name"
            // "Email"
            // "Phone Number"
            return (
              <TableRow key={row.name}>
                <TableCell align="left">{row.State}</TableCell>
                <TableCell align="left">{row['District/County']}</TableCell>
                <TableCell align="left">{row.Title}</TableCell>
                <TableCell component="th" scope="row">
                  {row.First} {row['Last Name']}
                </TableCell>
                <TableCell align="left">{row.Email.includes('@') && row.Email}</TableCell>
                <TableCell align="left">{row['Phone Number']}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[25, 50, 100, { label: 'All', value: -1 }]}
              colSpan={6}
              count={contactData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationControls}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default ContactDataTable