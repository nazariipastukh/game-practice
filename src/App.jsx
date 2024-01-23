import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.jsx";
import {useState} from "react";
import {Logs} from "./components/Logs.jsx";
import {WINNING_COMBINATIONS} from "./assets/winningCombinations.js";
import {GameOver} from "./components/GameOver.jsx";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const handleSetActive = (turnLogs) => {
    let activeSymbol = 'X'

    if (turnLogs.length > 0 && turnLogs[0].player === 'X') {
        activeSymbol = 'O'
    }
    return activeSymbol
}

export const App = () => {
    const [turnLogs, setTurnLogs] = useState([])

    const activePlayer = handleSetActive(turnLogs)

    let gameBoard = [...initialBoard.map(inner => [...inner])]

    for (const turn of turnLogs) {
        const {square, player} = turn
        const {row, col} = square

        gameBoard[row][col] = player
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol
        }
    }

    const isDraw = turnLogs.length === 9  && !winner

    const handleColClick = (rowIndex, colIndex) => {
        setTurnLogs(prevState => {
            const activeSymbol = handleSetActive(prevState)

            return [{square: {row: rowIndex, col: colIndex}, player: activeSymbol}, ...prevState]
        })
    }

    const handleRestart = () => {
        setTurnLogs([])
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className={activePlayer ? 'highlight-player' : undefined}>
                    <Player name={'Player 1'} symbol={'O'} current={activePlayer === 'X'}/>
                    <Player name={'Player 2'} symbol={'X'} current={activePlayer === 'O'}/>
                </ol>
                { (winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart}/> }
                <GameBoard handleColClick={handleColClick} turnLogs={turnLogs} gameBoard={gameBoard}/>
            </div>
            <Logs turnLogs={turnLogs}/>
        </main>
    );
};