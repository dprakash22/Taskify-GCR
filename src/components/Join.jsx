const Join =(props)=>{
    return (
        <form >
            <label>
            <h5>Enter Code </h5>
            <input onChange={e=>{props.fun(e.target.value)}} style={{"width":"120px","height":"20px"}} type="text"></input>
            </label>
        </form>
    )
    }
    export default Join