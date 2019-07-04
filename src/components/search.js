import React from "react";

const Search = props => {
  return (
    <div>
      <h1>Currency Exchanger</h1>
      <div className="ui form">
        <label>Enter amount in GBP:</label>
        <form onSubmit={props.apiCall}>
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default Search;
