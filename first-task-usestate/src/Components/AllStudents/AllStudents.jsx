import React from 'react'
import Student from '../Student/Student'
import Address from '../Address/Address'
import Collage from '../Collage/Collage'
import { useState } from 'react'

export default function AllStudents() {
   
    const[getdata,setDatta]=useState({});
    const submitStudent=(name,email,number,age,city)=>{
  
        const data={
            name:name,
            email:email,
            number:number,
            age:age,
            city:city
        }
        setDatta(data);
        //console.log(data);
        
        }
  return (
    <>
    
     <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>Student Data</h1>
                    </div>
                    <div className='card-body'>
                        
                    <Student submitStudent={submitStudent}/>
                    
                    </div>
                </div>
            </div>

            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h1> Get All Student Data</h1>
                    </div>
                    <div className='card-body'>
                        
                    <h3>name : {getdata.name}</h3>
                    <br/>
                    <h3>emai : {getdata.email}</h3>
                    <br/>
                    <h3>number : {getdata.number}</h3>
                    <br/>
                    <h3>age : {getdata.age}</h3>
                    <br/>
                    <h3>city : {getdata.city}</h3>

                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
