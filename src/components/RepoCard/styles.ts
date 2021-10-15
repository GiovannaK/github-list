import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  picture: {
    width: '60%',
    borderRadius: '50%',
    background: 'black',
  },
  subtitle: {
    paddingTop: theme.spacing(1),
    color: theme.palette.secondary.light,
    fontSize: theme.spacing(1.5),
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  data: {
    paddingTop: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
  status: {
    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
    fontSize: theme.spacing(1.3)
  }
}))
