import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
    }
  }

  handleInput = ({ target: { value }}) => {
    this.setState({ input: value })
  }

  sendMessage = () => {
    const { input } = this.state;
    const { onClick } = this.props;
    onClick(input)
  }
  render() {
    const { onClick } = this.props;
    const { input } = this.state;
    return (
      <div>
      <h1>Home</h1>
        <input type="text" onChange={this.handleInput} />
        <Link to={`/search/${ input }`}>
        <button type="button" onClick={this.sendMessage}>Pesquisar</button>
        </Link>
      </div>
    );
  }
}

export default Home;