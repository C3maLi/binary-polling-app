import React from 'react';
import './Poll.scss';

interface Choice {
  id: number;
  name: string;
}

interface PollProps {
  options: [Choice, Choice];
  onVote: (selected: Choice) => void;
}

const Poll: React.FC<PollProps> = ({ options, onVote }) => {
  return (
    <div className='poll'>
      <button
        className='choice'
        onClick={() => onVote(options[0])}
      >
        {options[0].name}
        <img
          src={`https://via.assets.so/movie.png?id=${options[0]?.id}&q=95&w=360&h=360&fit=fill`}
          alt=''
        />
      </button>
      <span className='vs'>VS</span>
      <button
        className='choice'
        onClick={() => onVote(options[1])}
      >
        {options[1].name}
        <img
          src={`https://via.assets.so/movie.png?id=${options[1]?.id}&q=95&w=360&h=360&fit=fill`}
          alt=''
        />
      </button>
    </div>
  );
};

export default Poll;
