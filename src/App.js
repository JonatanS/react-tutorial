import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  constructor(props) {
    super();
    console.log('App - contructor', props);
    // this.state = this.props.something;
  }

  componentDidMount() {
    console.log('App - mounted');
    //Ajax call
    //this.setState( {arrayofsomethings});
  }



  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
  };

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};   //clone the counter obj
      counters[index].value++;
      this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
  };

  render() {
    console.log('App - rendered');
    return (
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
      <Counters 
        counters={this.state.counters}
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete}/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
