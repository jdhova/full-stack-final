import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

import Axios from 'axios'
import './Dashboard.css'




const Dashboard = () => {

//   const navigate = useNavigate();

  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [hoursworked, setHoursworked] = useState(0)

  const [nameList,setNameList] = useState([])
  const [newHours,setNewHours] = useState('')


  useEffect(() => {
      Axios.get('http://localhost:5000/api/read')
      .then((response) => 
      
      setNameList(response.data)
     
      
      )},[])

  const createHours = () => {
    Axios.post('http://localhost:5000/api/work',
    {
      name:name,
      occupation:occupation,
      hoursworked:hoursworked

    })

    // const handleSignOut = () => {
        
    //   navigate('/login')
    // }
     
    // function logout () {
    //   navigate('/login')
    // }
    

    console.log('info here',name,occupation,hoursworked)
  }

  const updateHours = (id) => {
    console.log('check',newHours,'and',id)
    Axios.put('http://localhost:5000/api/update', {
      id:id,
      newHours:newHours
      
    })
  }
  const deleteHours = (id) => {
    Axios.delete(`http://localhost:5000/api/delete/${id}`)
  }

  


  return (
   
    <div className='dash-main'>
      {/* <button onClick={logout}>Logout</button> */}
        {/* <h3> Welcome to {user.displayName}s'Dash Board</h3> */}
           
            <br></br>
           {/* <h4>  Good Day {user.displayName}  its {today}{check()} </h4>  */}
            <h4>Kindly fill in hours worked</h4>

        <button >Logout</button>

 

    <div className='form-container'>


    
        <div className="form-group">
            <label htmlFor="inputAddress">Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            

            onChange ={(e)=> {
                setName(e.target.value)}}

            />

        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Position</label>
            <input
            type="text"
            className="form-control"
            id="position"
            placeholder="Position"
            onChange ={(e)=> {
              setOccupation(e.target.value)}}
            />
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Hours worked</label>
            <input
            type="number"
            className="form-control"
            id="hoursworked"
            placeholder="Hours worked"
            onChange ={(e)=> {
              setHoursworked(e.target.value)}}
            />
        </div>

       

        <button 
        
        onClick = {createHours} 
        type="submit" className="btn btn-primary">
            Submit
        </button>
    </div>

        
                 <h3 className='work'>Employee work hours </h3>
       
        <div className='results'>
          
            

            {nameList.map((user,key) => {
                        return <div key={key}
                            className='results2'>
                            <h3>Name: {user.name}</h3>
                            <h3>Occupation {user.occupation}</h3>
                            <h3>Hours worked: {user.hoursworked}</h3>
                            
                            <input type='text' placeholder='Update Hours'
                            onChange ={(e)=> {
                              setNewHours(e.target.value)}}
                              />
                            <button 
                            onClick = {
                              ()=>updateHours(user._id)} 
                            className='btnu'>Update</button>
                            <button 
                            onClick = {
                              ()=>deleteHours(user._id)}className='btnd'>Delete</button> 
                            </div>
                })}

        </div>

          

    </div>
  )
}

export default Dashboard