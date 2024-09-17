import React from 'react';
import PlayerCard from '../components/PlayerCard';

const Team = ({ players }) => {
  const roles = ['Goalkeeper', 'Defenders', 'Midfielders', 'Forwards', 'Coach'];

  return (
    <div className="container mx-auto p-4">
      {roles.map((role) => (
        <div key={role} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{role}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {players
              .filter((player) => player.role === role)
              .map((player) => (
                <PlayerCard key={player.id} jerseyNo={player.jerseyNo} name={player.name} image={player.image} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
