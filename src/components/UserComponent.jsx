import React, { useState } from 'react'
import { UserList } from './UserList'
import { UserRegi } from './UserRegi'

export const UserComponent = (props) => {

    


    const test = (user) =>{
        alert("test method called...")
        console.log("test method called...",user)
    }

    const deleteUser = (id)=>{

            console.log("delete user called...",id)
            users = users.filter((user)=>{
                return user.id != id
            })
            setusers(users)
            console.log("after delete...",users)
            
    }
    const addUser = (user)=>{
        console.log("add user called...",user)
        //users.push(user)
        //spread operator
        users = [...users,user]
        setusers(users)
        
    }

    console.log(props)
    var [users, setusers] = useState([
        {
            id:1,
            name:"John",
            age:30
        },{
            id:2,
            name:"Smith",
            age:40
        },{
            id:3,
            name:"Peter",
            age:50
        }
    ])

  return (
    <div>
        <h1>{props.apptitle}</h1>
        <h1>USER COMPONENT</h1>
        {/* <button onClick={()=>{test()}}>TEST</button> */}
        <UserList apptitle ={props.apptitle} users = {users} test ={test} delete = {deleteUser} add ={addUser}/>
        <UserRegi add ={addUser}/>
    </div>
  )
}
