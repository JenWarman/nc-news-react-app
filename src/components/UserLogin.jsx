import { useState } from "react";
import { fetchAllUsers } from "../api";

export default function UserLogin() {
  const [userLogin, setUserLogin] = useState("");
  const [userSet, setUserSet] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleChange = (event) => {
    setUserLogin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserSet(true);
    fetchAllUsers()
      .then((users) => {
        const matchingUser = users.find((user) => {
          return user.username === userLogin;
        });
        setCurrentUser(matchingUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (currentUser) {
    return (
      <div className="user-login-container">
        <img
          id="profile-pic"
          src={currentUser.avatar_url}
          alt={currentUser.username}
        />
        <p id="profile-user">{currentUser.username}</p>
      </div>
    );
  }

  return (
    <>
      <form className="user-login-form" onSubmit={handleSubmit}>
        <input
          id="us"
          placeholder="username"
          onChange={handleChange}
          name="username"
          value={userLogin.username}
        ></input>
        <button id="sign-in-button">Sign in</button>
      </form>
    </>
  );
}
