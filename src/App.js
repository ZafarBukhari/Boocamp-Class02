import React from 'react';
import StudentInfo from './StdInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <StudentInfo stdName="Syed Zafar Abbas Bukhari"
                   assignNo="1"
                   stdBatch="3"
                   stdCenter="Islamabad" />
    </div>
  );
}

export default App;
