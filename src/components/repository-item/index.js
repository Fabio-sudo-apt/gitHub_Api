import React from "react";
import * as styled from "./style";

function RepositoryItem(props){
    return(
        <styled.div>
            <h2>{props.name}</h2>
            <h4>Name do RepositoryItem</h4>
            <a href={props.url}>Lick para Repository</a>
        </styled.div>
    );
}

export default RepositoryItem;