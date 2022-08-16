import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function onSubmit(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			window.location.href = '/dashboard'
		} else {
			alert('Check email and password')
		}
	}

	return (
    <div className='container-fluid py-4'>
    <div className="row my-5">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={onSubmit}>
          <h1 className='text-center'>
            Login PAGE
          </h1>
          <div className='form-group'>
            <label className='input-labels'>Name</label>
            <input
              className='form-control'
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
           
          </div>
          <div className='form-group'>
            <label className='input-labels'>Email</label>
            
            <input
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            
          
          </div>
         
        
          <button className='btn btn-block btn-lg bg-transparent border border-dark' type='submit'>
            Login
          </button>

          <br></br>
        <h5>Not yet a Member? <Link to= '/'>Register</Link></h5>

        </form>
      </div>
    </div>
  </div>
		
	)
}

export default Login

// import React from 'react'

// export const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }


// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login