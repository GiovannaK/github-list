import { Card, CardContent, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './styles'

export const RepoCard = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              className={classes.title}
              >
                RepoTitle
            </Typography>
            <Typography
              variant="h5"
              className={classes.subtitle}
              >
                Full name:
            </Typography>
            <Link
              href="#"
              className={classes.link}
              >
                repo/repoeaddress
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              className={classes.title}
              >
                RepoTitle
            </Typography>
            <Typography
              variant="h5"
              className={classes.subtitle}
              >
                Full name:
            </Typography>
            <Link
              href="#"
              className={classes.link}
              >
                repo/repoeaddress
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              className={classes.title}
              >
                RepoTitle
            </Typography>
            <Typography
              variant="h5"
              className={classes.subtitle}
              >
                Full name:
            </Typography>
            <Link
              href="#"
              className={classes.link}
              >
                repo/repoeaddress
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              className={classes.title}
              >
                RepoTitle
            </Typography>
            <Typography
              variant="h5"
              className={classes.subtitle}
              >
                Full name:
            </Typography>
            <Link
              href="#"
              className={classes.link}
              >
                repo/repoeaddress
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
