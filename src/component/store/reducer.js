
    const oldState ={
        counter:0
    }
 const reducer = (state=oldState,action) => {
    if(action.type === "ADD"){
        return{
            counter:state.counter + action.value
        }
    }
    if(action.type ==="SUB"){
        return{
            counter:state.counter - action.value
        }
    }
   
   return state;
}
export default reducer;



