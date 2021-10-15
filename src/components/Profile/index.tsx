/* eslint-disable @next/next/no-img-element */
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ProfileButton } from '../ProfileButtons'
import { useStyles } from './styles'

export const Profile = () => {
  const classes = useStyles()
  return (
    <Grid container mt={2}
      alignItems="center"
      textAlign="center"
      spacing={2}
    >
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <img
          src="logo.png"
          alt="profile pic"
          className={classes.picture}
        />
        <ProfileButton />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Typography variant="h4">
            Your Name
        </Typography>
        <Grid container className={classes.dataContainer}>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.subtitle}>
              usermame
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.data}>
              myusername
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.subtitle}>
              company
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.data}>
              yourCompany
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.subtitle}>
              Location
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.data}>
              Brazil
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.subtitle}>
              Blog
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h5" className={classes.data}>
              http://example.com
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Typography variant="h5" className={classes.status}>
              Followers
                60
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
          <Typography variant="h5" className={classes.status}>
              Followings
                60
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Typography variant="h5" className={classes.status}>
              Gists
                60
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Typography variant="h5" className={classes.status}>
              Repos
                60
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
