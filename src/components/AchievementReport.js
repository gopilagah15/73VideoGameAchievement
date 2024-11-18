import React from "react";

const AchievementReport = ({ games }) => {
    const totalGames = games.length;
    const totalAchievements = games.reduce(
        (acc, game) => acc + game.achievements.length, 
        0
    );
    const totalCompleted = games.reduce(
        (acc, game) => 
            acc + game.achievements.filter(ach => ach.completed).length, 
        0
    );
    const totalTimeSpent = games.reduce((acc, game) => acc + game.timeSpent, 0);

    return (
        <div>
            <h2>Achievement Report</h2>
            <p>Total Games: {totalGames}</p>
            <p>Total Achievements: {totalAchievements}</p>
            <p>Achievements Completed: {totalCompleted}</p>
            <p>Total Time Spent: {totalTimeSpent} hours</p>
        </div>
    );
};

export default AchievementReport;
