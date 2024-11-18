import React, { useState } from "react";
import GameForm from "./components/GameForm";
import GameList from "./components/GameList";
import AchievementReport from "./components/AchievementReport";

const App = () => {
    const [games, setGames] = useState([]);

    const addGame = (game) => {
        setGames([...games, game]);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Video Game Achievement Tracker</h1>
            <GameForm addGame={addGame} />
            <GameList games={games} />
            <AchievementReport games={games} />
        </div>
    );
};

export default App;
