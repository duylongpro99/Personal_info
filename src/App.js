import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonList />
    </div>
  );
}

const PersonList = () => {
  return (
    <Person></Person>
    );
  }
  
const Person = () => {
  return(
    <div>
      I'm funtion....
    </div>
  )
}


export default App