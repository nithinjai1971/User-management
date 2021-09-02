import React from "react";
import { Table, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";
import { useHistory } from "react-router-dom";

function UserList({ users }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="mx-auto w-75 text-center">
      <Table dark>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  color="warning"
                  size="sm"
                  onClick={() =>
                    history.push({
                      pathname: "/edit",
                      state: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                      },
                    })
                  }
                >
                  Edit User
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  className="mx-2"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete User
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
