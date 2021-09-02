import React from "react";
import UserList from "./UserList";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.users);

  return (
    <div className="container">
      <div className="d-flex justify-content-end w-50 mx-auto mb-3">
        <Link to="/add-user">
          <Button color="primary" size="sm">
            Add User
          </Button>
        </Link>
      </div>
      <UserList users={users} />
    </div>
  );
}

export default Home;
