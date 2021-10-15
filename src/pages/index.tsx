import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useStyles } from '../styles/Home'

const Home: NextPage = () => {
  const classes = useStyles()
  return (
    <>
      <Button className={classes.button}>hey</Button>
    </>
  )
}

export default Home
