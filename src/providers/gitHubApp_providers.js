import React from "react";

import Api from '../services/api'

export const GithubContext = React.createContext({
  user: {},
  loading: Boolean,
  
});

export function GithubProvide({children}) {

  const [github, setGithub] = React.useState({
    user: {
      image: undefined,
      name: undefined,
      login: undefined,
      bio: undefined,
      urlPerfil: undefined,
      followers: 0,
      following: 0,
      location: undefined
    },
    loading: false
  });

  async function getUser(userName){
    const user = await (await Api.get(`/users/${userName}`)).data
    setGithub({
      user:{
        image: user.avatar_url,
        name: user.name,
        login: user.login,
        bio: user.bio,
        urlPerfil: user.html_url,
        followers: user.followers,
        following: user.following,
        location: user.location
      },
      loading: true
    })
  }

 

  const contextValue = {
    github, 
    getUser: React.useCallback((userName) => getUser(userName), []),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
}
