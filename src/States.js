import { Component } from "react";
// import { render } from "react-dom";
import { render } from "@testing-library/react";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  render() {
    const count = this.state.count;
    return (
      <div className="Containe">
        <h1>{count}</h1>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default States;

// code de rafik
// import { render } from "@testing-library/react";
// import { Component } from "react";
// class States extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   addOne = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   minusOne = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   reset = () => {
//     this.setState({ count: (this.state.count = 0) });
//   };
//   render() {
//     const count = this.state.count;
//     return (
//       <center>
//         <div className="Container">
//           <h1>{count}</h1>
//           <button onClick={this.minusOne}>-1</button>
//           <button onClick={this.addOne}>+1</button>
//           <button onClick={this.reset}>reset</button>
//         </div>
//       </center>
//     );
//   }
// }
// export default States;
