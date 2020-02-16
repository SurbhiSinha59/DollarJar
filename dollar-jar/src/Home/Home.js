import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  nameHandler = event => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => {
              this.nameHandler(event);
            }}
            value={this.state.name}
          ></input>
          <Link to={{ pathname: "/App", user: this.state.name }}>
            <button type="submit">Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default Home;
