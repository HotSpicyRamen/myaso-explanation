import React from "react";

import "./styles/styles.scss";
import { ReactState, ReduxState, ReduxFetch } from "./components";

const App: React.FC = () => (
  <div id="app" className="wrapper">
    <ReactState init={10} />
    <hr />
    <ReduxState />
    <hr />
    <ReduxFetch />
  </div>
);

export default App;
