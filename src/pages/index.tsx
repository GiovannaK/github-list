import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { ContainerComponent } from '../components/Container'
import { NavBar } from '../components/NavBar'
import { PaperComponent } from '../components/PaperComponent'
import { Profile } from '../components/Profile'
import { Search } from '../components/Search'
import { useStyles } from '../styles/Home'

const Home: NextPage = () => {
  const classes = useStyles()
  return (
    <PaperComponent>
      <NavBar />
      <ContainerComponent title="home">
        <Box mt={2}>
          <Search />
          <Profile />
        </Box>
      </ContainerComponent>
    </PaperComponent>
  )
}

export default Home
