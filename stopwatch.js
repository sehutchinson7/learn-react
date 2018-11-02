// let greetHolder = document.createElement("h1");
// let greeting = document.createTextNode("Hello World!");
// greetHolder.appendChild(greeting);
// document.getElementById("stopwatch").appendChild(greetHolder);

// function GreetMe() {
//   greetHolder.innerHTML = "Hello Aravind!";
//   document.getElementById("stopwatch").appendChild(greetingHolder);
// }
"use strict";

//const e = React.createElement;

// class GreetMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clickHappened: false };
//   }

//   render() {
//     if (this.state.clickHappened) {
//       return e("h1", null, "Hello Aravind!");
//     }

//     return e(
//       "button",
//       { onClick: () => this.setState({ clickHappened: true }) },
//       "Click Me"
//     );
//   }
// }
let bool = true;
let name = "World";
function returnName() {
  name = "Aravind";
  return name;
}

// const temp = e("h1", null, `Hello ${returnName(bool)}!`);
// const temp = (
//   <h1>
//     `$
//     {returnName(bool)}`
//   </h1>
// );
// const element = e(
//   "div",
//   { id: "stopwatch" },
//   temp,
//   e("button", { onClick: () => returnName() }, "Click Me")
// );

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValue: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isValue: !state.isValue }));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello, {this.state.isValue ? "World" : "Aravind"}!</h1>
        <button id="stopwatch" onClick={this.handleClick}>
          Click Me
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("stopwatch"));
