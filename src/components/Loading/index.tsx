/* eslint-disable @next/next/no-img-element */
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { PaperComponent } from '../PaperComponent'
import { useStyles } from './styles'

export const Loading = () => {
  const classes = useStyles()
  return (
    <PaperComponent>
      <Box className={classes.container}>
        <img src="logo.png" alt="github list logo" className={classes.image}/>
        <CircularProgress />
      </Box>
    </PaperComponent>
  )
}