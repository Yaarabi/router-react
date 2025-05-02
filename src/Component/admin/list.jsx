

import Info from "./info"

const List = ({arr, move})=>{

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
                    arr.map((ele)=>
                        <Info key={ele.id} n={ele.id} nam={ele.name} emai={ele.email} phon={ele.phone} web={ele.website} />
                    )
                }
            </tbody>
        <img className="close" onClick={move} src="/icon/back.png" alt="close icon" />
        </table>

        </>
    )

}

export default List