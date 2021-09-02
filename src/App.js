import React, { useEffect } from "react";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux/userSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(setUsers(json)));
  });

  return (
    <Router>
      <Switch>
        <Route path="/create">
          <h1 className="text-center">Users of Get Social App</h1>
          <AddUser />
        </Route>
        <Route path="/edit">
          <h1 className="text-center">Users of Get Social App</h1>
          <EditUser />
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
