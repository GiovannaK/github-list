/* eslint-disable @next/next/no-img-element */
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { GithubContext } from '../../context/githubContext'
import { useStyles } from './styles'

export const Profile = () => {
  const classes = useStyles()
  const {data} = useContext(GithubContext)
  return (
    <Grid container mt={2}
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      spacing={2}
    >
      {!data ? (
        <Box className={classes.svgContainer}>
          <img src="noUser.svg" alt="no user image" className={classes.svg}/>
          <Typography
            variant="h4"
            className={classes.fallbackText}>
              Digite para encontrar um usuário
          </Typography>
        </Box>
      ) : (
        <>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <img
              src={data && data.avatar_url}
              alt="profile pic"
              className={classes.picture}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4">
                {data && data.name}
            </Typography>
            <Grid container className={classes.dataContainer}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.subtitledata}>
                  Username
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.data}>
                  {data && data.login}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.subtitledata}>
                  Company
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.data}>
                  {data && data.company}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.subtitledata}>
                  Location
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.data}>
                  {data && data.location}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.subtitledata}>
                  Blog
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h5" className={classes.data}>
                  {data && data.blog}
                </Typography>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <Typography variant="h5" className={classes.status}>
                  Followers {data && data.followers}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <Typography variant="h5" className={classes.status}>
                  Followings {data && data.following}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <Typography variant="h5" className={classes.status}>
                  Gists {data && data.public_gists}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <Typography variant="h5" className={classes.status}>
                  Repos {data && data.public_repos}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  )
}
