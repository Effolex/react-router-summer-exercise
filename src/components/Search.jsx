import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      imgs: [],
    }
  }

  fetchImg = async () => {
    const { match: { params: { searchTerm } } } = this.props;
    const searchQ = `https://imsea.herokuapp.com/api/1?q=${searchTerm}`;
    console.log(searchQ);
    const response = await fetch(searchQ, {  method: 'GET', headers: { "Access-Control-Allow-Origin": "*"}});
    console.log(response)
    const data = await response.json();
    this.setState({ imgs: [...data.results]});
  }

  render () {
    return (
      <div>
        Search
        <h1>{this.props.match.params.searchTerm}</h1>
      </div>
    );
  }
}

export default Search;