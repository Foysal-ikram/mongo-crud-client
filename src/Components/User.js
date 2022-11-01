import React, { useState } from 'react';

const User = () => {
    const [user , setUser]= useState({})


    const submit = event =>{
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added successfully');
                event.target.reset();
            }
        })
     
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
              <form onSubmit={submit}>
                <input onBlur={blur} type="text" name="name" /> <br />
                <input onBlur={blur} type="email" name="email" id="email" /> <br />
                <button type="submit" >Submit Now</button>
            </form>
        </div>
    );
};

export default User;