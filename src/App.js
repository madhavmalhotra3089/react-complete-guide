import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {


togglePersonsHandler = () =>{
  this.setState({
    showPersons:!this.state.showPersons,
  })
}


deletePersonHandler = (personIndex) => {



    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

}
  state = {
    persons: [
      {
        name: 'Madhav',
        age: 28,
        id: 1,
      },
      {
        name: 'Avneet',
        age: 28,
        id: 2,
      },
      {
        name: 'Naseem',
        age: 12,
        id: 5,
      }
    ],
    showPersons: true,
  }

  render() {


    let persons = null;

    if(this.state.showPersons) {
      persons = this.state.persons.map((person,index)=><Person key={person.id} name={person.name} click = {()=>this.deletePersonHandler(index)}/>)
      
 
    }


    const classes = [];

    if(this.state.persons.length<=2) {
      classes.push('red'); 
    }


    if (this.state.persons.length<=1) {
      classes.push ('bold');
    }
    


    return (
      <div className="App">
       <h1>Hi, I am a React App </h1>
       <p className={classes.join(' ')}>This is really working!</p>
       <button onClick = {this.togglePersonsHandler}>Switching Names</button>
      {persons}

      </div>
    );
  }
}

export default App;
