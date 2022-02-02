import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      number: 0,
    }
  }

  handleInput = ({ target: { value }}) => {
    this.setState({number: value});
  }

  render () {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/history">
          <button>history</button>
        </Link>
      </div>
    );
  }
}

export default Nav;