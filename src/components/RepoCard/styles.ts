import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    background: 'rgba( 255, 255, 255, 0.15 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 3.5px )',
    webkitBackdropFilter: 'blur( 3.5px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
  },
  cardContent: {

  },
  title: {
    color: theme.palette.secondary.light
  },
  subtitle: {
    paddingTop: theme.spacing(1)
  },
  link: {
    cursor: 'pointer',
    color: theme.palette.primary.dark
  }
}))
