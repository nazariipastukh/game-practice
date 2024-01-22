import {useState} from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export const GameBoard = () => {
    const [updatedBoard, setUpdatedBoard] = useState(initialBoard)

    const handleColClick = (rowIndex, colIndex) => {
        const newBoard = [...updatedBoard].map(row => [...row])
        newBoard[rowIndex][colIndex] = 'Y'
        setUpdatedBoard(newBoard)
    }

    return (
        <ol id='game-board'>
            {
                updatedBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((colSymbol, colIndex) => (
                                    <li>
                                        <button onClick={() => handleColClick(rowIndex, colIndex)}>
                                            {colSymbol}
                                        </button>
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
};