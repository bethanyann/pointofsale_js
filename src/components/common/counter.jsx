import React, { Component } from "react";

class Counter extends Component {
   

  render() {
    // console.log('props', this.props)

    // return (
    //   <div className="row">
    //       <div className="col-2">
    //         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //       </div>
    //       <div className="col-7">
    //         <button
    //             onClick={() => this.props.onIncrement(this.props.counter)}
    //             className="btn btn-secondary btn-sm"
    //         >
    //         +
    //         </button>
    //         <button
    //             onClick={() => this.props.onDecrement(this.props.counter)}
    //             className="btn btn-secondary btn-sm m-2"
    //             disabled={this.props.counter.value === 0 ? 'disabled' : ''}
    //         >
    //         -
    //         </button>
    //         <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
    //         Delete
    //         </button>
    //       </div>
    //   </div>
    // );
  }

  getBadgeClasses() {
    let classes = "m-2 badge bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
