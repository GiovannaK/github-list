import { createContext } from "react";
import React from 'react'
import { IRepos, IUserGithub } from "./interfaces/githubUserInterface";
import { useGithub } from "./hooks/useGithub";
import { AxiosResponse } from "axios";

type GithubContextType = {
  data: IUserGithub | undefined,
  fetchUser: any,
  dataRepos: IRepos | undefined 
}

const GithubContext = createContext({} as GithubContextType)

const GithubProvider = ({children}: any) => {
  const {data, fetchUser, dataRepos} = useGithub()
  return (
    <GithubContext.Provider value={{
      data,
      fetchUser,
      dataRepos
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider}
