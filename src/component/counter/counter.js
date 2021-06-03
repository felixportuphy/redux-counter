
import {connect} from 'react-redux'

const counter = (props) => {
  
    
    return (
        <div className="counter-wrapper">
            <nav className="nav-container">
                <label>Counter</label><input value={props.output}/>
            </nav>
            <div className="controls">
                <button className="btn-controls" onClick={()=>props.onAdd()}>Add</button>
                <button className="btn-controls" onClick={()=>props.onSub()}>Subtract</button>
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
    onAdd:()=>dispatch({type:"ADD"}),
    onSub:()=>dispatch({type:"SUB"})
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(counter);
