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

  const people = [
    {
      id: 23,
      name: "Steve",
      job: "Engirneer"
    },
    {
      id: 46,
      name: "Hoan Miler",
      job: "Doctor"
    },
    {
      id: 64,
      name: "Michel James",
      job: "Dancer"
    }
  ]

  return (
    <>
      <Person person = {people[0]}></Person>
      <Person person = {people[1]}></Person>
      <Person person = {people[2]}></Person>
    </>
    );
  }
  
const Person = (props) => {
  const person = props.person;
  const path = "https://randomuser.me/api/portraits/thumb/men/";
  const url = path + person.id + ".jpg";
  return(
    <div className="person">
      <img src={url} alt="some person" />
      <div>
        <span>Name: </span><h4>{person.name}</h4>
        <span>Job: </span><h4>{person.job}</h4>
      </div>
    </div>
  )
}


export default App