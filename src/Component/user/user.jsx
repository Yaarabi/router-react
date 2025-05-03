
import {  useState, useEffect, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import "./user.css"

import { useNavigate } from 'react-router-dom'



const Props = createContext()

const User = () => {

let location = useLocation()
console.log(location)
let {name} = location.state || {}



let [user, setUser]=useState([])

const navigate =useNavigate()

const logOut = ()=>{
    navigate("/")
}


useEffect(
    
        ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{

            return res.json()

    
            
    
        })
        .then((resu)=>{
            console.log(resu)
            setUser(
                resu.find(
                        (ele)=>(ele.email===name)
            ))
        })
        .catch((err) => console.log(`illa ${err}`))
        
    
    }, [name])



    return (
        <section>
        {user ? (
            <>
            <div className="profile">
                <h2>{user.name}</h2>
                <img className='user' src="/icon/user (2).png" alt="user icon" />
            </div>
            <h2> Hello!, {user.name}, here is some your infprmation</h2>
            <div className="card">
                <img src="/icon/user (2).png" alt="user img" height={"100px"} />
                <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                    <li>{user.website}</li>
                    <li>{name}</li>
                </ul>
            </div>
            </>
        ): <h1>Leoding ...</h1>}
            <img onClick={logOut} src="/public/icon/door.png" style={{height:"40px"}} alt="log out icon" />
        </section>
        // </Props.Provider>
    )
}

export default User
// export {Props}

