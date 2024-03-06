import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = `http://localhost:5000/api/auth/login`

const Login = () => {
  const navigate = useNavigate(); // Move inside the component body

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        setUser({ email: "", password: "" });
        navigate("/"); // Using navigate here
      }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="main">
        <div className="image">
          Image
        </div>
        <div className="registrationform">
          <form onSubmit={handleSubmit}>

            <br />
            <div>
              <label htmlFor="email">email</label>
              <br />
              <input
                type='text'
                name='email'
                placeholder='Enter email'
                id='email'
                required
                autoComplete='off'
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <br />

            <br />
            <div>
              <label htmlFor="password">password</label>
              <br />
              <input
                type='password'
                name='password'
                placeholder='Enter password'
                id='password'
                required
                autoComplete='off'
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <br />
            <button className='btn' type='submit'>Login Now</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
