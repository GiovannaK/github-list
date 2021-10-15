import { Button, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    background: theme.palette.primary.dark
  }
}))
