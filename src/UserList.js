import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserList(){
    const [listOfUsers, setListOfUsers]=useState([]);

useEffect(()=> {
    axios

        .get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> {
            setListOfUsers(res.data);
        })
        .catch(function (error) {
            console.log(error);
        })


});

  return (
      <div>
          <h1>List of users</h1>
          {listOfUsers.map((user)=>
          <div style={{borderStyle:"solid", borderColor:"green", margin:"20px" }} key={user.id}>
              Name:  {user.name} - email:  { user.email} - Phone:  {user.phone}
          </div>
          )}
      </div>
  )

}

