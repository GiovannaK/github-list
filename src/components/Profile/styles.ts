import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  picture: {
    width: 300,
    borderRadius: '50%',
    background: 'black',
  },
  dataContainer: {
    [theme.breakpoints.down('xl')]: {
			marginBottom: theme.spacing(6)
		},
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(6)
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(2)
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: theme.spacing(2)
		}
  },
  subtitle: {
    paddingTop: theme.spacing(1),
    color: theme.palette.secondary.light,
    fontSize: theme.spacing(1.3),
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
