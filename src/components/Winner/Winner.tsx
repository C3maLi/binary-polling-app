import React from 'react';
import './Winner.scss';

interface Choice {
  id: number;
  name: string;
}

interface WinnerProps {
  winner: Choice;
}

const Winner: React.FC<WinnerProps> = ({ winner }) => {
  return (
    <div className='winner'>
      <b>Winner</b>
      <strong>{winner.name}</strong>
      <img
        src={`https://via.assets.so/movie.png?id=${winner?.id}&q=95&w=360&h=360&fit=fill`}
        alt=''
      />
    </div>
  );
};

export default Winner;
