import React from 'react'

export const UserList = (props) => {
    console.log("user list...",props)

    var userObj = {
        id:4,
        name:"amit",
        age:24
    }
  return (
    <div>
        <h3>USER LIST....</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>{props.delete(user.id)}}>DELETE</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
        </table>
        <button onClick={()=>{props.add(userObj)}}>ADD</button>
    </div>
  )
}
