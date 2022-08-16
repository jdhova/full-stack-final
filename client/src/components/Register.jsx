import React, { useState } from 'react';
// import validation from './Validation';
import { Link } from 'react-router-dom'
 import { useNavigate } from "react-router-dom";





export const  Register = () =>{
  
 let navigate = useNavigate();
 
  

  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  const onSubmit = async  (e)  => {

		e.preventDefault()

  
		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
        password2,
			}),
		})

		const data = await response.json()
      console.log('one step')
		if (data.status === 'ok') {
            <Link to ='/login'>Login</Link>
      navigate('/login');
		}
	}




  return (
    <div className='container-fluid py-4'>
      <div className="row my-5">
        <div className="col-md-6 col-10 mx-auto">

        <form onSubmit={onSubmit}>
          <h1 className='text-center'>
            Sign up
          </h1>
          <div className='form-group'>
              <label className='input-labels'>Name</label>
            <input
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
				    />
            
          </div>

          <div className='form-group'>
           <label className='input-labels'>Email</label>
            <input
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
				    />
           
          </div>
          <div className='form-group'>
          <label className='input-labels'>Password</label>
            <input
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
				    />
           
          </div>
          <div className='form-group'>
            <label className='input-labels'>Password</label>
            <input
                className='form-control'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                type="password"
                placeholder="Enter Password Again"
              />
           
          </div>
          <button className='btn btn-block btn-lg bg-transparent border border-dark' type='submit'>
            Sign up
          </button>
        </form>

        
        <br></br>
        <h5>Already a Menber? <Link to= '/login'>login</Link></h5>
      </div>
    </div>
  </div>
  );
}

export default Register;

// // import React from 'react'

// // const Register = () => {
// //   return (
// //     <div>Register</div>
// //   )
// // }

// // export default Register


// // import React from 'react'

// // export const Register = () => {
// //   return (
// //     <div>Register</div>
// //   )
// // }


// import React from 'react'

// const Register = () => {
//   return (
//     <div>Register</div>
//   )
// }

// export default Register   