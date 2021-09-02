import React from "react";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-user">
          <h1 className="text-center">Users of Get Social App</h1>
          <AddUser />
        </Route>
        <Route path="/">
          <h1 className="text-center">Users of Get Social App</h1>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
