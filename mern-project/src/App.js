import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function showRecipe(recipe)
  if ( !recipe ){
    return <p>recipe not found</p>
  }
  return(
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  )

class SubscriptionForm extends React.Component
    constructor(props){
      super(props);

      this.state = {
        acceptedTerms: false,
        email: '',
      };
    }

    updateCheckbox(checked){
      this.setState({
        acceptedTerms: checked,
      })
    }

    updateEmail(value){
      this.setState({
        email: value,
      });
    }

    submit(){

    }

    render()
      return(
        <form>
          <input
            type="email"
            onChange={(event) => {this.updateEmail(event.target.value)}}
          />
          <input 
            type="checkbox"
            checked={this.state.acceptedTerms}
        </form>
      )
export default App;
