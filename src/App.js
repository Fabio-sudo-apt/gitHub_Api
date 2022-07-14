import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import {GithubProvide} from "./providers/gitHubApp_providers"


function App() {
  return (
    <main>
      <GithubProvide>
        <Layout>
          <Profile />
        </Layout>
      </GithubProvide>
    </main>
  );
}

export default App;