import React from 'react'
import { useState } from 'react'

export default function Student(props) {

    const {submitStudent}=props;

    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");
    const[age,setAge]=useState("");
    const[city,setCity]=useState("");


  return (
    <>

    <form onSubmit={(e)=>{ e.preventDefault(); submitStudent(name,email,number,age,city)}}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
     id="exampleInputEmail3" 
     aria-describedby="emailHelp"
     name='name'
     value={name}
     onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
     id="exampleInputEmail1"
      aria-describedby="emailHelp"
      name='email'
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="number" 
    className="form-control" 
    id="exampleInputEmail1"
     aria-describedby="emailHelp"
     name='number'
     value={number}
     onChange={(e)=>{setNumber(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">age</label>
    <input type="number"
     className="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     name='age'
     value={age}
     onChange={(e)=>{setAge(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">City</label>
    <select className="form-select" 
    aria-label="Default select example"
    name='city'
    value={city}
    onChange={(e)=>{setCity(e.target.value)}}>
        <option value="nagpur">nagpur</option>
        <option value="bhandara">bhandara</option>
        <option value="pune">pune</option>
        <option value="agra">agra</option>
        <option value="mumbai">mumbai</option>
        <option value="akola">akola</option>
        <option value="nashik">nashik</option>
        <option value="rajastan">rajashtan</option>
        <option value="chandrapur">chandrapur</option>
    </select>
  </div>
    <button type='submit' className="btn btn-primary">Submit</button>
</form>
    </>
  )
}
