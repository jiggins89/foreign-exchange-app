// Libraries
import React from "react";
import Axios from "axios";
// Components
import Search from "./components/search";
import Result from "./components/Result";

class App extends React.Component {
  // let amount = document.querySelector("input").value;
  constructor(props) {
    super(props);

    this.state = { userInput: 1, result: null };
  }

  apiCall = async userInput => {
    userInput.preventDefault();
    // this api call is working
    const workingApiResponse = await Axios.get(
      `https://dog.ceo/api/breeds/image/random`
    );
    console.log(workingApiResponse);
    this.setState({ result: workingApiResponse.data.message });

    // // this api call has a CORS issue
    // const apiResponse = await Axios.get(
    //   `https://us-central1-capco-243515.cloudfunctions.net/front-end-test-api`
    // );
    // console.log(apiResponse);
    // this.setState({ result: apiResponse.data.message });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <Search apiCall={this.apiCall} />
        <Result result={this.state.result} />
      </div>
    );
  }
}

export default App;
