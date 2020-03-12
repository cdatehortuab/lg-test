import React, { useState, useCallback, useEffect } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

import { FocusableTile } from './Tile';

const iterator = [...Array(10)].map((_, index) => `${index}`);

function App({ setFocus }) {
  const [selectedTile, setSelectedTile] = useState('');

  const onSelectTile = useCallback(
    (tileId) => {
      setSelectedTile(tileId);
    },
    [],
  );

  useEffect(() => {
    setFocus();
    return () => {};
  /* 
   * Explicit disable React Hooks Eslint rule because this effect
   * should only be called in the first render.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {iterator.map(id => (
        <FocusableTile
          key={id}
          id={id}
          isSelected={selectedTile === id}
          onSelect={onSelectTile}
        >
          {id}
        </FocusableTile>
      ))}
      <p>Selected Tile: {selectedTile}</p>
    </div>
  );
}

export default withFocusable()(App);
