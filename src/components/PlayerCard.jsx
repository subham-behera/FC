import React from 'react';

const PlayerCard = ({ jerseyNo, name, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative transition-transform transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-row items-center">
        <h3 className="text-xl font-semibold text-gray-600 mb-2">{name}</h3>
        <div className="absolute bottom-4 right-4 bg-blue-500 text-white text-lg font-bold px-3 py-1 rounded">
          {jerseyNo}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
