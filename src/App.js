import React, { useState, useCallback } from 'react';

import Tile from './Tile';

const iterator = [...Array(10)].map((_, index) => `${index}`);

function App() {
  const [selectedTile, setSelectedTile] = useState('');

  const onSelectTile = useCallback(
    (tileId) => {
      setSelectedTile(tileId);
    },
    [],
  );

  return (
    <div className="App">
      {iterator.map(id => (
        <Tile key={id} id={id} isSelected={selectedTile === id} onSelect={onSelectTile}>
          {id}
        </Tile>
      ))}
      <p>Selected Tile: {selectedTile}</p>
    </div>
  );
}

export default App;
