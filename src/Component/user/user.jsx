
import {  useState, useEffect, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import "./user.css"
// import List from '../admin/list'
import { useNavigate } from 'react-router-dom'

// import { Id } from '../form/form'

const Props = createContext()

const User = () => {

let location = useLocation()
let add = location.add

let [arr, setArr]=useState([])
let [guide, setGuide]= useState([])
let [user, setUser]=useState([])
let [show, setShow]=useState(true)

let move =()=>{
    setShow(false)
}

const navigate =useNavigate()

const logOut = ()=>{
    navigate("/")
}
// const guide = useContext(Id)
// console.log(guide)

useEffect(
    
        ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
            // console.log(res);
            return res.json()
            // console.log(db);
    
            
    
        })
        .then((resu)=>{
            // console.log(resu);
            
            setArr(resu)
            console.log(resu)
        })
        .catch((err) => console.log(`illa ${err}`))
        
    
    }, [])

    // const user = arr.find(
    //     (user)=>(user.email===guide)
        
    // )
    const check = ()=>{
        setUser(
            arr.find(
                    (user)=>(user.email===guide)
        ))
    }

    // console.log(user)

    return (
        <Props.Provider value={show}>
        <section>
        {show && (
        <>
        <h2>Plz enter your userName here to retcheck</h2>
        <div className="label">
            <input type="text"
                value={guide}
                onChange={(e)=>setGuide(e.target.value)}
                placeholder='email'
            />
            <button onClick={()=>(check(), move())}>check</button>
        </div>
        </>)}
        {user && !show && (
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
                    <li>{add}</li>
                </ul>
            </div>
            </>
        )}
            <img onClick={logOut} src="/public/icon/door.png" style={{height:"40px"}} alt="log out icon" />
        </section>
        </Props.Provider>
    )
}

export default User
export {Props}

