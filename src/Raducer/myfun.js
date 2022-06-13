const initialState = 0;
export const increementNum = (state = initialState,action)=>{
switch(action.type){
    case "INCNUM":
        return state +1;
    case "DECNUM":
        return state -1;
    default:
        return state;

}

}
