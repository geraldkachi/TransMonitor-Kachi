import Layout from "./layout/Layout";
import TransForm from "./components/TransForm";
import './App.css'

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/TransForm" component={TransForm} />
    </Switch>
  );
}

export default App;
