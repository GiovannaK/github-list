/* eslint-disable @next/next/no-img-element */
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useStyles } from './styles'

export const NavBar = () => {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box className={classes.logoContainer}>
            <img
              className={classes.logo}
              src="logo.png"
              alt="github list logo"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
