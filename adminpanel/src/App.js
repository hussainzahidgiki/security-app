import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:4000/api/login")
      .then((res) => {
        const guards = res.data.currentLocation;
        console.log(guards)
        this.setState({ location: guards })
      })
  }
  render() {
    return (
      <div>
        <h1>Admin Panel</h1>
        {this.state.location}
      </div>
    );
  }
}

export default App;