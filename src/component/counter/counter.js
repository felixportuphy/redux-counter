
import {connect} from 'react-redux'

const counter = (props) => {
  
    
    return (
        <div className="counter-wrapper">
            <nav className="nav-container">
                <label>Counter</label><input value={props.output}/>
            </nav>
            <div className="controls">
                <button className="btn-controls" onClick={()=>props.onAdd()}>Add 5</button>
                <button className="btn-controls" onClick={()=>props.onSub()}>Subtract 5</button>
            </div><hr/>
            <div className="footer">
                <p>Powered By Quarsh </p>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        output:state.counter
    };
};

const mapDispatchToProps = dispatch =>{
   return{
    onAdd:()=>dispatch({type:"ADD",value:5}),
    onSub:()=>dispatch({type:"SUB",value:5})
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(counter);
