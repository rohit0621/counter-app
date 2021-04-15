import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // onIncrement={this.props.onIncrement}   //DESTRUCTURING//
          />
        ))}
      </div>
    );
  }
}

export default Counters;
