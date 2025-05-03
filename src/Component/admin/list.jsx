

import { useState } from "react"
import Info from "./info"

const List = ({arr, move})=>{

    const [data, setData]=useState(arr)

    

    let filetr = (index)=>{
        setData(data.filter((obj)=>(obj.id!==index)))
    }

    return (
        <>
        <table>
            <thead>
                <tr className="header">
                    <th style={{width:"50px"}}>N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>WebSite</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>

                {
                    data.map((ele,index)=>
                        <Info key={ele.id} n={index +1} nam={ele.name} emai={ele.email} phon={ele.phone} web={ele.website} fun={()=>filetr(ele.id)} />
                    )
                }
            </tbody>
        <img className="close" onClick={move} src="/icon/back.png" alt="close icon" />
        </table>

        </>
    )

}

export default List