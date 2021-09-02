import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "reactstrap";
import { addUser, editUser } from "../redux/userSlice";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(uuidv4());
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setId(location.state ? location.state.id : uuidv4());
    setName(location.state ? location.state.name : "");
    setEmail(location.state ? location.state.email : "");
    setIsEdit(location.state ? location.state.isEdit : false);
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id, name, email }));
    history.push("/");
  };

  const onEdit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, name, email }));
    history.push("/");
  };
  return (
    <div className="container p-4">
      <Form>
        <h4 className="mb-3">Add User Details</h4>
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
        <Button
          color="primary"
          onClick={(e) => (isEdit ? onEdit(e) : onSubmit(e))}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
