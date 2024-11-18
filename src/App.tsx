import React, { useState } from 'react';
import Poll from './components/Poll/Poll';
import Winner from './components/Winner/Winner';
import './App.scss';

interface Choice {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [choices, setChoices] = useState<Choice[]>([
    { id: 1, name: 'Vacation Friends' },
    { id: 2, name: 'He`s All That' },
    { id: 3, name: 'Venom' },
    { id: 4, name: 'Encanto' },
    { id: 5, name: 'Addams Family 2' },
    { id: 6, name: 'Lamb' },
    { id: 7, name: 'House Gucci' },
    { id: 8, name: 'Red Notice' },
    { id: 9, name: 'Finch' },
    { id: 10, name: 'Moonfall' },
  ]);

  const [currentPair, setCurrentPair] = useState<[Choice, Choice]>([
    choices[0],
    choices[1],
  ]);
  const [index, setIndex] = useState(2);
  const [winner, setWinner] = useState<Choice | null>(null);

  const handleVote = (selected: Choice) => {
    setTimeout(() => {
      if (index < choices.length) {
        setCurrentPair([selected, choices[index]]);
        setIndex(index + 1);
      } else {
        setWinner(selected);
      }
    }, 200);

    setChoices(choices);
  };

  return (
    <div className='app'>
      <h1>Movie Poll</h1>
      {winner ? (
        <Winner winner={winner} />
      ) : (
        <Poll
          options={currentPair}
          onVote={handleVote}
        />
      )}
    </div>
  );
};

export default App;
