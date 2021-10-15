import { Paper } from '@mui/material'
import React from 'react'
import { useStyles } from './styles'

export const PaperComponent = ({children}: any) => {
  const classes = useStyles()
  return (
    <Paper classes={{root: classes.paperRoot}} elevation={0} square>
      {children}
    </Paper>
  )
}
