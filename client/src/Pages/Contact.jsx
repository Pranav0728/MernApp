import React, { useState } from 'react'

const Contact = () => {
  const [user,setUser]= useState({
    username:"",
    email:"",
    message:""
  })

    const handleinput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]:value,
      });
     
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(user)
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
              <label htmlFor="message">Message</label>
              <br />
              <textarea
              rows={10}
                cols={25}
                type='text'
                name='message'
                placeholder='Enter Message'
                id='message'
                required
                autoComplete='off'
                value={user.message}
                onChange={handleinput}
              />
            </div>
            <br />
            <button className='btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
