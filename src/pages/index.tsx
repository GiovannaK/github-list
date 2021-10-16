import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { ContainerComponent } from '../components/Container'
import { NavBar } from '../components/NavBar'
import { PaperComponent } from '../components/PaperComponent'
import { Profile } from '../components/Profile'
import { RepoCard } from '../components/RepoCard'
import { Search } from '../components/Search'

const Home: NextPage = () => {
  return (
    <PaperComponent>
      <NavBar />
      <ContainerComponent title="home">
        <Box mt={2}>
          <Search />
          <Profile />
          <RepoCard />
        </Box>
      </ContainerComponent>
    </PaperComponent>
  )
}

export default Home
