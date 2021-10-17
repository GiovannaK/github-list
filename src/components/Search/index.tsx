import { Button, Grid, InputBase } from '@mui/material'
import React, { useContext, useState } from 'react'
import { GithubContext } from '../../context/githubContext'
import { useStyles } from './styles'
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({getQuery}: any) => {
  const classes = useStyles()
  const [usernameForSearch, setUsernameForSearch] = useState('');
  const {fetchUser} = useContext(GithubContext)
  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return fetchUser(usernameForSearch);
  };
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <InputBase
            className={classes.input}
            placeholder="Buscar usuário"
            onChange={(event) => setUsernameForSearch(event.target.value)}
            value={usernameForSearch}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Button type="submit"
            onClick={submitGetUser}
          ><SearchIcon className={classes.icon}/></Button>
        </Grid>
      </Grid>
    </>
  )
}
