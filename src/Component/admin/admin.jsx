
import "./admin.css"
import { useEffect, useState } from 'react';
import List from './list';
import { useNavigate } from "react-router-dom";

// const DataBase = createContext()

function Admin() {
let [data, setData] = useState([])
let [visible, setVesible] = useState(false)
let [index, setIndex]=useState('')
let [val, setVal]=useState('')

let chage = ()=>{
    return setIndex(val)
}


let display = ()=>{
    setVesible(true)
}
let hide = () =>{
    setVesible(false)
}

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


let [avoid, setAvoid] = useState(false)
let toAvoid = ()=>{ 
    (avoid)? setAvoid(false) : setAvoid(true) 
}
let Avoid = ()=>{
    setAvoid(false)
}

const navigate =useNavigate()

const logOut = ()=>{
    navigate("/")
}

return (
    // <DataBase.Provider value={data}>
    <div className="Admin">
            {!visible && <h1>Click the button to show all our users</h1>}
            {!visible && <button className='show' onClick={display}>Show All</button>}
            {!visible && <h2>To see a single user put the id (1 to 10), and click in the name of user to show there info</h2>}
            {!visible && <input type='number' value={val} onChange={(e)=>  setVal(e.target.value)} />}
            {!visible && <button className='show' onClick={() => { chage(); Avoid()}}>Show user</button>}
            {data[index] && (
            <>
            {!visible && <h2 onClick={toAvoid}>{data[index].name}</h2>}
            {!visible && avoid && <h4> <span>UserName:</span> {data[index].name}, <span>Email:</span> {data[index].email}, <span>Tele:</span> {data[index].phone}, <span>Website:</span> {data[index].website}  </h4> }
            </>)}
            {visible && <List arr={data} move={hide}/>}
            <img onClick={logOut} src="/public/icon/door.png" style={{height:"40px"}} alt="log out icon" />
    </div>
    // {/* </DataBase.Provider> */}
);
}



export default Admin;
// export {DataBase}