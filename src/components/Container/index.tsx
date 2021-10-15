import React from 'react'
import Head from 'next/head';
import { Container } from '@mui/material';
import { useStyles } from './styles';

type ContainerType = {
  children: React.ReactNode,
  title: string
}

export const ContainerComponent = ({children, title}: ContainerType) => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  )
}
