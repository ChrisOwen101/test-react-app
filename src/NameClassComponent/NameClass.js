import React from "react";

class NameClass extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.firstName + " " + this.props.lastName}</h1>
      </div>
    );
  }
}

export default NameClass;
