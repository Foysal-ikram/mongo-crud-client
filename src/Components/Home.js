import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData() ;
    const [displayUsers, setDisplayUsers] = useState(data);
    
    const deleteData= user =>{
        console.log('deletinggggggggggggg :' , user._id)
        
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
          
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
           const newUser = displayUsers.filter( usr=> usr._id !== user._id)
           setDisplayUsers(newUser)
        })
        
    }

    return (
        <div>
          <h2>user : {data.length}</h2>
          {
            displayUsers.map(user => 
                
            <p key={user._id} >{user.name}<button onClick={()=>{deleteData(user)}}> x</button>
            <Link to={`/update/${user._id}`}>
            <button>Update</button>
            </Link>
            </p>
                    
                   
                
            )
          }
        </div>
    );
};

export default Home;