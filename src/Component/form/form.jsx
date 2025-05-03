
import { useState, useContext,useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import "./form.css"
import React from 'react'
import { Context } from "../home"
// import { DataBase } from "../admin/admin"
const Id = createContext()

const Form = () => {
    let [data, setData]=useState('')
    let [name, setName]=useState('')
    let [pass, setPass]=useState('')
    let navigate = useNavigate()

    const face = useContext(Context)

    const loginToAdmin =() => {
        (name=="admin" && pass == "admin")? ( navigate("/admin") ) : (alert("Incorrect Input"))
    }

    // const data = useContext(DataBase)
    useEffect(
    
        ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
            // console.log(res);
            return res.json()
            // console.log(db);
    
            
    
        })
        .then((resu)=>{
            console.log(resu);
            
            setData(resu)
        })
        .catch((err) => console.log(`walo ${err}`))
        
    
    }, [])
    
    const loginToUser =() => {
        (data.some((ele)=>(name===ele.email)) && data.some((ele)=>(pass===ele.username)))? ( navigate("/user", {state: {name}}) ) : (alert("Incorrect Input"))
    }

return (
    // <Id.Provider value={name}>
    <div id='form'>
        <div>
            <label>User Name:</label>
            <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="your user name"/>
        </div>
        <div>
            <label>Password:</label>
            <input 
            type="password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            placeholder="your password"/>
        </div>
        { face && <button onClick={loginToAdmin} >Login</button>}
        { !face && <button onClick={loginToUser} >Login</button>}
    </div>
    // </Id.Provider>
)
}

export default Form
export {Id}
