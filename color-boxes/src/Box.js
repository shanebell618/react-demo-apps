import React, {Component} from "react";

class Box extends Component {

  render() {
      return(
        <div>
            <div style={{
                width:  `${this.props.width}px`,
                height: `${this.props.height}px`,
                backgroundColor: this.props.color
            }}>
            </div>
            <button onClick={this.props.remove}>X</button>
        </div>
      );
    }
  }


export default Box;
