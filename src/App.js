import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/categories", { headers: { 'Authorization': 'whatever-you-want' }})
      .then(res => res.json())
      .then(data => this.setState( { categories: data.categories} ))
  }

  render() {
    const { categories } = this.state
    return (
      <div className="app">
        <h1>Readable</h1>
        {categories.map(category => ( <li key={category.name}>{category.name}</li>))}
      </div>
    );
  }
}

export default App;
