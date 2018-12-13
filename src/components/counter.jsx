import React, { Component } from "react"; // type `imrc`

class Counter extends Component {
  //the state contains data that is local to this component
  state = {
    value: this.props.counter
      .value /* props data comes from outside components and is read-only from within here*/,
    imgUrl: "https://picsum.photos/200"
  };

//   handleIncrement = index => {
//     console.log(this.state.value + 1);
//     // console.log(this); //this refers to the current Counter object
//     this.setState({ value: this.state.value + 1 }); //tell react that something changed
//   };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* <button
          onClick={this.handleIncrement}
          className="btn btn-sm btn-primary"
        >
          Increment
        </button> */}
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
