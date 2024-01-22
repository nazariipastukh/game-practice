import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.jsx";

export const App = () => {
    return (
        <main>
            <div id='game-container'>
                <ol id='players'>
                    <Player name={'Player 1'} symbol={'O'}/>
                    <Player name={'Player 2'} symbol={'X'}/>
                </ol>
                <GameBoard/>
            </div>
            Log
        </main>
    );
};