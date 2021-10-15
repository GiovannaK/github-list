import { Grid, InputBase } from '@mui/material'
import React from 'react'
import { useStyles } from './styles'

export const Search = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid
        container
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <InputBase
          className={classes.input}
          placeholder="Buscar usuário"
        />
        </Grid>
      </Grid>
    </div>
  )
}
