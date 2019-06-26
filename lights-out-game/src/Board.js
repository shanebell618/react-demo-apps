import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.21
  };
  constructor(props) {
    super(props);
    this.state = { 
      hasWon: false,
      board: this.createBoard()
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    for(let r = 0; r < this.props.nrows; r++) {
      let row = [];
      for(let c = 0; c < this.props.ncols; c++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    console.log("TESTTT", coord)
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // flip the clicked cell
    flipCell(y, x);

    //flip surrounding cells
    flipCell(y, x + 1);
    flipCell(y, x - 1);
    flipCell(y + 1, x);
    flipCell(y - 1, x);

    // win when every cell is turned off
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board: board, hasWon: hasWon});
  }


  /** Render game board or winning message. */

  render() {
    if(this.state.hasWon) {
      return(
        <div className="Board-title">
          <div className="neon">You</div>
          <div className="flux">Win!</div>
        </div>
      );
    }


    let tblBoard = [];
    for(let r = 0; r < this.props.nrows; r++) {
      let row = [];
      for(let c = 0; c < this.props.ncols; c++) {
        let coord = `${r}-${c}`;
        row.push(
          <Cell 
            key={coord} 
            isLit={this.state.board[r][c]} 
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={r}>{row}</tr>);
    }
    return (
      <div className="Board">
        <div className="Board-title">
          <div className="neon">Lights</div>
          <div className="flux">Out</div>
        </div>
        <table>
          <tbody>
            {tblBoard}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Board;
