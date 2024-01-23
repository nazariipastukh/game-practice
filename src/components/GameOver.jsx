export const GameOver = ({ winner, onRestart }) => {
    return (
        <section id='game-over'>
            <h2> Game Over </h2>
            {
                winner && <p>{winner} won!</p>
            }
            {
                !winner && <p>Draw!</p>
            }
            <button onClick={onRestart}> Play Again! </button>
        </section>
    );
};