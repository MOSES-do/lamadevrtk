import React, { useState, useEffect, useCallback } from "react";
import Warning from "../warning/Warning";
import UsersList from './UsersList'
import "./update.css";
import { useSelector } from "react-redux"
import { selectAllUsers } from "../../redux/userSlice"

let timerID = 0;
const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    timerID++;
    const timerId = setInterval(() => {
      setTimer((currentTime) => {
        console.log(`Timer ${timerID} starts ${currentTime}`)
        return currentTime + 1
      })
    }, 1000)

    return () => {
      console.log("timer clerared")
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      <div>Timer : {timer} </div>
    </>
  )
}


export default function Update() {
  const [index, setIndex] = useState(0)
  const updateIndex = useCallback(() => {
    setIndex(index + 1);
  }, [index]);


  const users = useSelector(selectAllUsers)


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameSetter = useCallback((e) => setName(e.target.value), [])





  const UserView = () => {
    return <UsersList users={users} />
  }




  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <UserView />
        {JSON.stringify(users)}

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
          <Timer key={index} />
          {index}
          <button onClick={updateIndex}>Update index</button>
        </div>
      </div>
    </div>
  );
}
