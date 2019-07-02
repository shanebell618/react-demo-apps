import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.create = this.create.bind(this);
  }

  create(box) {
    this.setState({
      boxes: [...this.state.boxes, box]
    })
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box key={box.id} id={box.id} width={box.width} height={box.height} color={box.color} remove={() => this.remove(box.id)}/>
    ));
    return (
      <div>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    )
  }
}

export default BoxList;
