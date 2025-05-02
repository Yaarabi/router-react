
// import { Outlet, Link } from "react-router-dom"
import { useState, createContext } from "react"
import Form from "../form/form"
import "./style.css"

const Context = createContext()


let Home = ()=>{

    let [face, setFace]=useState(false)
    let [visible, setVesible]=useState(false)
    const show = ()=>{
        setVesible(true)
    }
    const toAdmin = ()=>{
        setFace(true)
    }
    const toUser = ()=>{
        setFace(false)
    }

    return (
        <Context.Provider value={face}>
        <main>
            {!visible && <div className="route" onClick={()=>(show(), toAdmin())}>For Admin</div>}
            {!visible && <div className="route" onClick={()=>(show(), toUser())}>For User</div>}
            {/* <div><Link to="/admin">For Admin</Link></div>
            <div><Link to="/user">For User</Link></div> */}
            {visible && <Form/>}
        </main>
        </Context.Provider>
    )

}

export default Home 
export {Context}