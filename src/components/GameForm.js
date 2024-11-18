import React, { useState } from "react";

const GameForm = ({ addGame }) => {
    const [gameName, setGameName] = useState("");
    const [achievement, setAchievement] = useState("");
    const [timeSpent, setTimeSpent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!gameName || !achievement || !timeSpent) {
            alert("Please fill all fields!");
            return;
        }
        const newGame = {
            gameName,
            achievements: [{ name: achievement, completed: false }],
            timeSpent: parseInt(timeSpent, 10),
        };
        addGame(newGame);
        setGameName("");
        setAchievement("");
        setTimeSpent("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Game Name"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Achievement"
                value={achievement}
                onChange={(e) => setAchievement(e.target.value)}
            />
            <input
                type="number"
                placeholder="Time Spent (hours)"
                value={timeSpent}
                onChange={(e) => setTimeSpent(e.target.value)}
            />
            <button type="submit">Add Game</button>
        </form>
    );
};

export default GameForm;
