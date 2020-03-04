import React, { Component } from 'react'
import './App.css';
import Form from './components/Form.js'


 
  
export default class App extends Component {
  
  state = {
    fields: {}

  }
  
  
  
  onSubmit = fields => {
    console.log('App comp got: ', fields)
    this.setState({ fields });
  };


  render() {
      return (
        <div className="container">
          <h1>Justuno Support</h1>
          <h3>How may we assist?</h3>
          <Form onSubmit={fields => this.onSubmit(fields) } />
      <p>
        
        {JSON.stringify(this.state.fields, null,2)}
        
      </p>
        </div>
      )
    }
  }
  








   

