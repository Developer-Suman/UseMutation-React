
import './App.css';
import User from './Users';
import {useState} from 'react'; 
import UserDetails from './UserDetails';
 
function App() {

  const [userId, setUserId] = useState(); //selected
  return (
    <div className="App">
      <User setUser={setUserId}/>
      
      <div>
      {userId}
      </div>
      <UserDetails userid={userId} />
      
      
    
    </div>
  );
}

export default App;
