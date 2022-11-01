import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const storedUser = useLoaderData() ;
    const [user , setUser]= useState({})


    const submit = event =>{
        event.preventDefault();
        fetch(`http://localhost:5000/users/${storedUser._id}` , {
            method: 'PUT' ,
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
       .then(res=>res.json())
       .then(data=> console.log())
       
     
    }

    const blur = event =>{


        const field = event.target.name ; //this will add the name of the field 
        
        const value = event.target.value ;
        console.log( value)
        const newUser = {...user} 
        newUser[ field ] = value ;  
        setUser(newUser) ;
        console.log(user) 

    }

    
    return (
        <div>
            <h1>Update user</h1>
            <form onSubmit={submit}>
                <input onBlur={blur} type="text" defaultValue={storedUser.name} name="name" /> <br />
                <input onBlur={blur} type="email" defaultValue={storedUser.email} name="email" id="email" /> <br />
                <button type="submit" >Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;