import React from 'react'

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
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
    <Box
      alignItems="center"
      bg="backgrounds.light"
      display="flex"
      justifyContent="flex-end"
      py={2}
      px={3}
    >
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