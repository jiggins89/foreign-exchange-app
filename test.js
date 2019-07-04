apiCall = async userInput => {
  userInput.preventDefault();
  try {
    const response = await Axios.get(
      `https://us-central1-capco-243515.cloudfunctions.net/front-end-test-api/?amount=${this.state.userInput}`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
