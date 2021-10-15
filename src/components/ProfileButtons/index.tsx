import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useStyles} from './styles';

export const ProfileButton = () => {
  const classes = useStyles()
  return (
    <Box>
      <Button className={classes.button}>Repositories</Button>
      <Button className={classes.button}>Starred</Button>
    </Box>
  )
}
