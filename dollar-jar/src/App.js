import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "Surbhi", total: 0, id: 1 },
        { name: "Nikki", total: 0, id: 2 },
        { name: "Neel", total: 0, id: 3 },
        { name: "Meet", total: 0, id: 4 },
        { name: "Sandeep", total: 0, id: 5 }
      ],
      newObj: { name: "", total: 0, id: 0 },
      count: 5,
      totalSum: 0,
      jarValue: 10
    };
  }

  takeinp = event => {
    let tempid = this.state.count + 1;
    this.setState({
      newObj: { name: event.target.value, total: 0, id: tempid }
    });
    this.setState({ count: tempid });
  };

  onSubmit = () => {
    let temp1 = { ...this.state.newObj };
    if (temp1.name != "") {
      this.state.persons.push(this.state.newObj);
      let temp = [...this.state.persons];
      this.setState({ persons: temp, newObj: { name: "", total: 0, id: 0 } });
    }
  };

  onEnterPress = e => {
    if (e.keyCode == 13) {
      e.preventDefault();
      this.state.persons.push(this.state.newObj);
      let temp = [...this.state.persons];
      this.setState({ persons: temp, newObj: { name: "", total: 0, id: 0 } });
    }
  };

  jarChange = event => {
    this.setState({ jarValue: event.target.value });
  };
  totalAmt = () => {
    let sum = 0;

    this.state.persons.forEach(i => {
      sum = sum + i.total;
    });
    // console.log(sum);
    this.setState({ totalSum: sum });
  };

  addAmt = id => {
    console.log(id);
    let i = 0;
    for (i = 0; i < this.state.persons.length; i++) {
      if (this.state.persons[i].id === id) {
        break;
      }
    }
    console.log(i);
    const temp = { ...this.state.persons[i] };
    temp.total = temp.total + parseInt(this.state.jarValue);
    console.log(temp.total);
    const copy = [...this.state.persons];
    copy[i] = temp;

    this.setState({ persons: copy }, () => {
      this.totalAmt();
    });
  };

  subAmt = id => {
    let i = 0;
    for (i = 0; i < this.state.persons.length; i++) {
      if (this.state.persons[i].id === id) {
        break;
      }
    }
    console.log(i);
    const temp = { ...this.state.persons[i] };
    temp.total = temp.total - parseInt(this.state.jarValue);
    console.log(temp.total);
    const copy = [...this.state.persons];
    copy[i] = temp;

    this.setState({ persons: copy }, () => {
      this.totalAmt();
    });
  };

  render() {
    const { user } = this.props.location;
    return (
      <div className="App">
        <h1>Welcome {user}</h1>
        <input
          type="text"
          value={this.state.newObj.name}
          placeholder="enter person"
          onChange={this.takeinp}
          onKeyDown={this.onEnterPress}
        ></input>
        <button onClick={this.onSubmit}>ADD USER</button>
        <p>
          <input
            type="text"
            value={this.state.jarValue}
            placeholder="current jar value is ${this.state.jarValue}"
            onChange={this.jarChange}
          ></input>
        </p>
        <p>Total amount is : {this.state.totalSum}</p>
        {this.state.persons.map(user => {
          console.log(user);
          return (
            <Person
              name={user.name}
              total={user.total}
              addAmt={() => this.addAmt(user.id)}
              subAmt={() => this.subAmt(user.id)}
            />
          );
        })}
      </div>
    );
  }
}
//
export default App;
