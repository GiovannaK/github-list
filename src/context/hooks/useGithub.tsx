/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { IRepos, IUserGithub } from '../interfaces/githubUserInterface'

export const useGithub = () => {
  const [username, setUsername] = useState('')

  const fetchUser = async (username: string): Promise<IUserGithub> => {
      setUsername(username)
      const {data} = await api.get(`/users/${username}`)
      return data as IUserGithub
  }

  const fetchRepo = async (): Promise<IRepos> => {
    const {data} = await api.get(`users/${username}/repos`)
    return data as IRepos
  }

  const {isLoading, isError, error, data} = useQuery(['user', username], () =>
    fetchUser(username), {
      enabled: !!username
    }
  )

  const {isLoading: load, isError: iserror, data: dataRepos} = useQuery(['userRepos', username], () =>
    fetchRepo(), {
      enabled: !!username
    }
  )

  if(isError){
    console.log(error);
  }

  if(isLoading){
    <Loading />
  }

  if(load){
    <Loading />
  }

  if(iserror){
    console.log(error)
  }

  return {
    data,
    fetchUser,
    dataRepos
  }
}
