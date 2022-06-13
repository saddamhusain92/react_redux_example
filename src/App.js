import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {incnum,decnum,user_login,user_logout} from './Action/index'
function App() {
  const mystate = useSelector((state)=> state.increementNum)
  const logstate = useSelector((state)=> state.loginStatus)
  const dishpatch = useDispatch();
  return (
    <div className="App">
      Login : {logstate}
     {mystate}<br/>
     <button onClick={()=>dishpatch(incnum())} >increement Number</button>
     <button onClick={()=>dishpatch(decnum())} >deincreement Number</button>
     <button onClick={()=>dishpatch(user_login())} >login</button>
     <button onClick={()=>dishpatch(user_logout())} >logout</button>

    </div>
  );
}

export default App;
