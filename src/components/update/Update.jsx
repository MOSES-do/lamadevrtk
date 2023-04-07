import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector } from "react-redux"
import { selectAllUsers } from "../../redux/userSlice"



export default function Update() {
  const users = useSelector(selectAllUsers)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");



  const UserView = () => {
    return (
      users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      )
      ))
  }



  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <UserView />
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              className="updateButton"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
