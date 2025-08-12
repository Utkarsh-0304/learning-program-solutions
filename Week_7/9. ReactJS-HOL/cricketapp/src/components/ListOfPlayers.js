import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Player 1', score: 80 },
    { name: 'Player 2', score: 65 },
    { name: 'Player 3', score: 90 },
    { name: 'Player 4', score: 55 },
    { name: 'Player 5', score: 75 },
    { name: 'Player 6', score: 45 },
    { name: 'Player 7', score: 95 },
    { name: 'Player 8', score: 60 },
    { name: 'Player 9', score: 85 },
    { name: 'Player 10', score: 70 },
    { name: 'Player 11', score: 50 },
  ];

  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <h3>All Players:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
      <h3>Players with Scores Below 70:</h3>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
