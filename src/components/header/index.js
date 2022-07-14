import React from "react";
import { GithubContext } from "../../providers/gitHubApp_providers";
import * as styled from "./style";


function Header(){
    const {getUser} = React.useContext(GithubContext);

    function clickBTN(){
        let name = document.querySelector("#inputName").value

       getUser(name)
    }
    return(
        <styled.display>
            <styled.input id="inputName" type='text' placeholder="Digite o username do github"/>
            <styled.button  onClick={()=>clickBTN()}>Buscar</styled.button>
        </styled.display>
    );
}

export default Header