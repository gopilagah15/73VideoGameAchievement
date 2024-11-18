import React from "react";

const GameList = ({ games }) => {
    const toggleAchievement = (gameIndex, achievementIndex) => {
        games[gameIndex].achievements[achievementIndex].completed = 
            !games[gameIndex].achievements[achievementIndex].completed;
    };

    return (
        <div>
            <h2>Game List</h2>
            {games.length === 0 ? (
                <p>No games added yet.</p>
            ) : (
                <ul>
                    {games.map((game, gameIndex) => (
                        <li key={gameIndex} style={{ marginBottom: "15px" }}>
                            <strong>Game:</strong> {game.gameName} <br />
                            <strong>Time Spent:</strong> {game.timeSpent} hours
                            <ul>
                                {game.achievements.map((ach, achIndex) => (
                                    <li key={achIndex}>
                                        <input 
                                            type="checkbox"
                                            checked={ach.completed}
                                            onChange={() => toggleAchievement(gameIndex, achIndex)}
                                        />
                                        {ach.name} {ach.completed ? "(Completed)" : "(In Progress)"}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GameList;
