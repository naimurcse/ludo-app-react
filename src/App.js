import React, {useEffect, useState} from 'react'
import './App.css';
import Users from './components/Users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/Team/Team';


function App() {

  const [users, setUsers] = useState([]);
  const [members,setMembers] = useState([]);
  
  useEffect(()=>{    
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then(data => setUsers(data.results));
  },[]);
  
  // Eventhandler 
  const addMembers = (props) =>{
    setMembers([...members, props]);
    // console.log("Member Added", props);
  }

  return (
    <div className="container">
      <h1>Hello Bangladesh</h1>
      <div className="row">
        <div className="col-md-7">
        {
          users.map((user)=><Users 
          user={user}
          addMembers={addMembers}
          
          ></Users>)
        }
        </div>
        <div className="col-md-5">
          <Team members={members}></Team>       
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
