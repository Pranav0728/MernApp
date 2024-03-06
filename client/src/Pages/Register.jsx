import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const URL = `http://localhost:5000/api/auth/register`;
const Register = () => {
  const navigate = useNavigate();
  const [user,setUser]= useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

    const handleinput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]:value,
      });
     
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(user)
      try {
        const response = await fetch(URL,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(user),
        });
        if(response.ok){
          setUser({username:"",
          email:"",
          phone:"",
          password:""});
          navigate("/")
        }
        console.log(response);
      } catch (error) {
        console.log("register",error);
      }
    }

  return (
    <>
      <div className="main">
        <div className="image">
            Image
        </div>
        <div className="registrationform">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <br />
              <input
                type='text'
                name='username'
                placeholder='Enter Username'
                id='username'
                required
                autoComplete='off'
                value={user.username}
                onChange={handleinput}
              />
            </div>
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
                onChange={handleinput}
              />
            </div>
            <br />
            <div>
              <label htmlFor="Phonenumber">Phonenumber</label>
              <br />
              <input
                type='number'
                name='phone'
                placeholder='Enter Phonenumber'
                id='Phonenumber'
                required
                autoComplete='off'
                value={user.phone}
                onChange={handleinput}
              />
            </div>
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
                onChange={handleinput}
              />
            </div>
            <br />
            <button className='btn' type='submit'>Register Now</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
