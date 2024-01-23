export const GameBoard = ({handleColClick, turnLogs, gameBoard}) => {
    return (
        <ol id='game-board'>
            {
                gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((colSymbol, colIndex) => (
                                    <li>
                                        <button onClick={() => handleColClick(rowIndex, colIndex)} disabled={colSymbol !== null}>
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