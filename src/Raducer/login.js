const logState = "false";
export const loginStatus = (state = logState,action)=>{
switch(action.type){
    case "LOGIN":
        return state = "true";
    case "LOGOUT":
        return state = "false";
    default:
        return state;

}

}