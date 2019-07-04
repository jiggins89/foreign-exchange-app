import React from "react";
import Axios from "axios";

class App extends React.Component {
  // let amount = document.querySelector("input").value;
  constructor(props) {
    super(props);

    this.state = { userInput: 1, results: {} };
  }

  apiCall = userInput => {
    userInput.preventDefault();
    console.log("working?");
    Axios.get(
      `https://us-central1-capco-243515.cloudfunctions.net/front-end-test-api/?amount=${this.state.userInput}`
    )
      .then(function(response) {
        console.log("then?");
        this.setState({ results: response });
      })
      .catch(function(error) {
        console.log("not good!", error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <h1>Currency Exchanger</h1>
        <div className="ui form">
          <label>Enter amount:</label>
          <form onSubmit={this.apiCall}>
            <input type="text" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
