import React, { useState, useEffect, useCallback } from "react";
import Warning from "../warning/Warning";
import UsersList from './UsersList'
import "./update.css";
import { useSelector, useDispatch } from "react-redux"
import {
  getUsersStatus, getUsersError, fetchUsers,
} from "../../redux/userSlice"





export default function Update() {

  const { users } = useSelector((state) => state.users)
  const dispatch = useDispatch();

  // const users = useSelector(selectAllUsers)
  const usersStatus = useSelector(getUsersStatus)
  const error = useSelector(getUsersError)


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameSetter = (e) => setName(e.target.value)

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }

    return () => {
      console.log("Cleanup succeeded");
      return usersStatus === 'succeeded'
    }
  }, [usersStatus, dispatch])

  console.log(users);

  let render = ""
  // const UserView = () => {
  //   if (usersStatus === 'loading') {
  //     return <p>Loading...</p>
  //   } else if (usersStatus === 'succeeded') {
  //     console.log("Yaay")
  //     return (
  //       <UsersList users={users} />
  //     )
  //   } else if (usersStatus === "failed") {
  //     return <p>{error}</p>
  //   }
  // }



  if (usersStatus === 'loading') {
    render = <p>Loading...</p>
  } else if (usersStatus === 'succeeded') {
    render =
      users.length > 0 ? <UsersList users={users} /> : "Users list empty"
  } else if (usersStatus === "failed") {
    render = <p>{error}</p>
  }





  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        {render}
        {/* {JSON.stringify(users)} */}

        <Warning />

        <button className="delete">Delete Account</button>
        <div className="updateContainer">
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
                onChange={nameSetter}
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
