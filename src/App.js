import React from 'react';
import StudentInfo from './StdInfo';
import Users from './UserInfo';
import './App.css';

function App() {
  return (
    <div>
        <div className="App">
          <StudentInfo stdName="Syed Zafar Abbas Bukhari"
                      assignNo="1"
                      stdBatch="3"
                      stdCenter="Islamabad" />
        </div>
        
        <div className="App">
          <Users username="bukhary72pk" />
        </div>
    </div>
  );
}
export default App;