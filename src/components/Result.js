import React from "react";

const Result = props => {
  console.log(props);
  return (
    <div>
      <img src={props.result} alt="result" style={{ maxWidth: "80%" }} />
    </div>
  );
};

export default Result;
