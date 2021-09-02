import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "reactstrap";
import { editUser } from "../redux/userSlice";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setId(location.state.id);
    setName(location.state.name);
    setEmail(location.state.email);
  }, [location]);

  const onEdit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, name, email }));
    history.push("/");
  };

  return (
    <div className="container p-4">
      <Form>
        <h4 className="mb-3">Edit User Details</h4>
        <Input
          type="name"
          className="mb-3"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
        />
        <Input
          type="email"
          name="email"
          className="mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter user email"
        />
        <Button color="primary" onClick={(e) => onEdit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditUser;
