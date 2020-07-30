import React from 'react'

import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import { STATES } from './constants'

const TableFilterControls = (props) => {

  const [selectedState, setSelectedState] = React.useState('All')

  const { handleStateSelection } = props

  const theme = useTheme()

  const useStyles = makeStyles(() => ({
    filterBar: {
      alignItems: 'center',
      backgroundColor: theme.palette.background.light,
      borderTopLeftRadius: '3px',
      borderTopRightRadius: '3px',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(2),
    },
    formControl: {
      marginLeft: theme.spacing(3),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))

  const classes = useStyles()

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)
    handleStateSelection(event)
  }
  
  return (
    <Box className={classes.filterBar}>
      <Typography>Filters: </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="by-state">By State</InputLabel>
        <Select
          labelId="by-state"
          id="by-state"
          inputProps={{ 'aria-label': 'Filter by State' }}
          id="by-state"
          native
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="All">
            Show All
          </option>
          {STATES.map(state => <option key={state.replace(/ /g, '_')} value={state}>{state}</option>)}
        </Select>
      </FormControl>
    </Box>
  )
}

export default TableFilterControls