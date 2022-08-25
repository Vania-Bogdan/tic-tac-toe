import React from "react";
import "./css/styles.css"

class Game extends React.Component {

    state = {
        squares: Array(9).fill(null),
        count: 0,
        win: false,
        winner: ""
    }

    //win combinations
    winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    isWinner = () => {
        //check on winner------------------------------
        let symbol = (this.state.count % 2 === 0) ? "X" : "O"
        for (let i = 0; i < this.winnerLines.length; i++){
            let line = this.winnerLines[i]
            if (this.state.squares[line[0]] === symbol &&
                this.state.squares[line[1]] === symbol &&
                this.state.squares[line[2]] === symbol) {
                setTimeout(() => {
                    this.setState({
                        squares: Array(9).fill(null),
                        count: 0,
                        win: true,
                        winner: symbol + " WIN"
                    })
                }, 100);
            }

            //check on draw------------------------------
            const array = this.state.squares;
            const even = (element) => element === null;
            if (array.some(even) === false) {
                if (this.state.squares[line[0]] === symbol &&
                this.state.squares[line[1]] === symbol &&
                this.state.squares[line[2]] === symbol) {
                    this.setState({
                        squares: Array(9).fill(null),
                        count: 0,
                        win: true,
                        winner: symbol + " WIN"
                    })
                } else {
                    this.setState({
                        squares: Array(9).fill(null),
                        count: 0,
                        win: true,
                        winner: "DRAW"
                    })
                }
            }
        }
        
    }

    //play again-------------------------------
    playAgain = () => {
        this.setState({
            win: false,
            winner: ""
        })
    }

    //creating X & O --------------------------------
    clickHandler = event => {
        let data = event.target.getAttribute('data')
        let newSquares = this.state.squares
        let newCount = this.state.count
        if (newSquares[data] === null) {
            newSquares[data] = (newCount % 2 === 0) ? "X" : "O"
            this.setState({
                squares: newSquares,
                count: newCount + 1
            })
        } else {
            return
        }
        this.isWinner()
    }

    render() {
        const win = this.state.win
        return (
            <div>
                {win === true ?
                    <div className="wrapper">
                        <h1 className="win">{this.state.winner}</h1>
                        <button type="button" className="win_btn" onClick={this.playAgain}>play again</button>
                    </div>
                    :
                    <div className="field">
                <div className="item" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
                <div className="item" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
                <div className="item" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
                <div className="item" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
                <div className="item" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
                <div className="item" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
                <div className="item" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
                <div className="item" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
                <div className="item" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
                    </div>
                }
            </div>
            
        )
        
    }
}

export default Game