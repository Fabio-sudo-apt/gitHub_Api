import React from "react";
import Header from '../header'

function Layout({children}){
    return(
        <section>
            <Header></Header>
            {children}
        </section>
    );
}

export default Layout