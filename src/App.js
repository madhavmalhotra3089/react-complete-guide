import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {


togglePersonsHandler = () =>{
  this.setState({
    showPersons:!this.state.showPersons,
  })
}
  state = {
    persons: [
      {
        name: 'Madhav',
        age: 28,
      },
      {
        name: 'Avneet',
        age: 28
      }
    ],
    showPersons: true,
  }

  render() {


    let persons = null;

    if(this.state.showPersons) {
      persons = this.state.persons.map((person)=><Person name={person.name} click = {this.switchNameHandler}/>)
    }

    return (
      <div className="App">
       <h1>Hi, I am a React App </h1>
       <button onClick = {this.togglePersonsHandler}>Switching Names</button>
      {persons}

      </div>
    );
  }
}

export default App;
