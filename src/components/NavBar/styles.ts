import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: 'transparent',
    height: '7vh',
    boxShadow: 'none',
    width: '100%'
  },
  logoContainer: {

  },
  logo: {
    paddingTop: theme.spacing(0.5),
    width: '25%'
  }
}))
