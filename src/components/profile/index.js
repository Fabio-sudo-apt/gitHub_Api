import React from "react";
import * as styled from "./style";
import {GithubContext} from "../../providers/gitHubApp_providers"

function Profile() {

  const {github} = React.useContext(GithubContext);

  return github.loading ?  (
    <styled.cardPerfil>
      <styled.display>
        <styled.imagePerfil
          src={github.user.image}
          alt="Image do Avatar"
        />
        <styled.margin15>
          <styled.h2Name>
            Nome: <styled.NameSpan>{github.user.name}</styled.NameSpan>
          </styled.h2Name>
          <styled.h2Name>
            Login: <styled.NameSpan>{github.user.login}</styled.NameSpan>
          </styled.h2Name>
          <styled.h3Name>Seguidores: <styled.NameSpan>{github.user.followers}</styled.NameSpan></styled.h3Name>
          <styled.h3Name>Seguidor: <styled.NameSpan>{github.user.following}</styled.NameSpan></styled.h3Name>
          <styled.h3Name>Local: <styled.NameSpan>{github.user.location}</styled.NameSpan></styled.h3Name>
          <styled.paragrafo>
          {github.user.bio}
          <a href={github.user.urlPerfil}>GitHub</a>
          </styled.paragrafo>
        </styled.margin15>
      </styled.display>
    </styled.cardPerfil>
  ) : <h1>Não tem pesquisa</h1>
}

export default Profile;
