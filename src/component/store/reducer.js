
    const oldState ={
        counter:0
    }
 const reducer = (state=oldState,action) => {
    if(action.type === "ADD"){
        return{
            counter:state.counter +1
        }
    }
    if(action.type ==="SUB"){
        return{
            counter:state.counter -1
        }
    }
   
   return state;
}
export default reducer;



