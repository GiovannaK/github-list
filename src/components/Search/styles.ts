import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  input: {
    border: '2px solid',
    borderColor: theme.palette.primary.dark,
    padding: theme.spacing(1),
    borderRadius: '10px',
    width: '100%'
  },
  icon: {
    fontSize: '2rem'
  }
}))
