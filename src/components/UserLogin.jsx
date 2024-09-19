import { useState } from "react";

export default function UserLogin() {
  const [userLogin, setUserLogin] = useState("");
  const [userSet, setUserSet] = useState(false);

  const usernameHardCoded = "grumpy19";

  const handleChange = (event) => {
    setUserLogin(event.target.value);
  };

  const handleSubmit = (event) => {
    setUserSet(true);
  };

  if (userSet) {
    return (
      <div className="user-login-container">
        <img id="profile-pic" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="black and white cat with a green background"/>
        <p id="profile-user">{userLogin}</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
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
