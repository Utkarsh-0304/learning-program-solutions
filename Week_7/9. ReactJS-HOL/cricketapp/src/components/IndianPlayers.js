import React from 'react';

const IndianPlayers = () => {
  const T20Players = ['Player A', 'Player B', 'Player C'];
  const RanjiTrophyPlayers = ['Player D', 'Player E', 'Player F'];

  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const [oddPlayer, evenPlayer] = allPlayers;

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Odd Team Player:</h3>
      <p>{oddPlayer}</p>
      <h3>Even Team Player:</h3>
      <p>{evenPlayer}</p>
      <h3>All Players (T20 + Ranji Trophy):</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
