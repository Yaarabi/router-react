

const Info = (props)=>{

    return (
        <tr>
            <td>{props.n}</td>
            <td>{props.nam}</td>
            <td>{props.emai}</td>
            <td>{props.phon}</td>
            <td>{props.web}</td>
            <td><img onClick={props.fun} src="/icon/bin.png" style={{height:"20px"}} alt="delet icon" /></td>
        </tr>
    )

}

export default Info