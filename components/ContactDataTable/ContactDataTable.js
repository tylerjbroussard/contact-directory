import React from 'react'

import {
  Box,
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

import TableFilterControls from './components/TableFilterControls'
import TablePaginationControls from './components/TablePaginationControls'

const ContactDataTable = ({ contactData, handleFilteredData } = props) => {

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleStateSelection = (event) => {
    setFilterState(event.target.value)
    handleFilteredData({ type: 'State', value: event.target.value})
  }

  const theme = useTheme()

  const useStylesTable = makeStyles((theme) => ({
    tableHeading: {
      fontSize: '12px',
      textTransform: 'uppercase',
    },
  }))
  const classes = useStylesTable()

  return (
    <Paper className={classes.paper}>
      <TableFilterControls
        handleStateSelection={handleStateSelection}
        selectedState={filterState}
      />
      {contactData.length ? (
        <TableContainer>
          <Table aria-label="Prosecutor Contact Data Table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeading}>State</TableCell>
                <TableCell className={classes.tableHeading}>District/County</TableCell>
                <TableCell className={classes.tableHeading}>Title</TableCell>
                <TableCell className={classes.tableHeading}>Name</TableCell>
                <TableCell className={classes.tableHeading}>Email</TableCell>
                <TableCell className={classes.tableHeading}>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
              ? contactData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : contactData
            ).map((row) => {

                console.log(row)
                return (
                  <TableRow key={`${row.nameState}${row.First}${row['Last Name']}`}>
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
                  rowsPerPageOptions={[10, 25, 50, 100, { label: 'All', value: -1 }]}
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
      ):(
        <Box p={4}>No data available for these filters.</Box>
      )}
    </Paper>
  )
}

export default ContactDataTable