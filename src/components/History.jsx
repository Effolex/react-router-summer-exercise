import React from "react";
import Nav from "./Nav";

class history extends React.Component {
  render() {
    console.log(this.props)
    const { history } = this.props
    return (
      <div>
        history
        {history.map((hist) => (<h1>{hist}</h1>))}
      </div>
    );
  }
}

export default history;