import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
    var users = [
        {
            id:1,
            name:"Amit"
        },
        {
            id:2,
            name:"Sumit"
        }
    ]
  return (
    <div>
        <ul>
            {/* <li>
                <Link to ="/contactus/director/1">Person 1</Link>
            </li>
            <li>
                <Link to ="/contactus/director/2">Person 2</Link>
            </li> */}
            {
                users.map((user)=>{
                    return(<li>
                        <Link to ={`/contactus/director/${user.id}`}>{user.name}</Link>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
