import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  paperRoot: {
    background: 'linear-gradient(180deg, rgba(9,0,45,1) 0%, rgba(55,3,50,1) 100%)',
    minHeight: '100vh',
    zIndex: -2,
    position: 'absolute',
    minWidth: '100%',
  },
}))
