import { Card, CardContent, Grid, Link, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { GithubContext } from '../../context/githubContext'
import { IRepos, typeRepos } from '../../context/interfaces/githubUserInterface'
import { useStyles } from './styles'

export const RepoCard = () => {
  const classes = useStyles()
  const {dataRepos} = useContext(GithubContext)
  return (
    <Grid container spacing={2} mt={2} mb={2} justifyContent="center">
      {dataRepos && dataRepos.map((repo: typeRepos) => (
        <Grid item xs={10} sm={10} md={4} lg={4} xl={3} key={repo.id}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h4"
                className={classes.title}
                >
                  {repo.name}
              </Typography>
              <Typography
                variant="h5"
                className={classes.subtitle}
                >
                  Full name: {repo.full_name}
              </Typography>
              <Link
                href={repo.html_url}
                target="_blank"
                className={classes.link}
                >
                  {repo.name}
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
