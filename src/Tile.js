import React, { useCallback, useMemo } from 'react';

import './Tile.css';

function Tile({ id, isSelected, className, onSelect, children }) {
  const onClick = useCallback(
    () => {
      console.log('Me han hecho click', id);
      onSelect(id);
    },
    [id, onSelect],
  );

  const classNameString = useMemo(() => (
    [
      'Tile',
      isSelected && 'selected',
      className,
    ].filter(Boolean).join(' ')
  ), [isSelected, className])

  return (
    <button className={classNameString} onClick={onClick}>
      {children}
    </button>
  )
}

export default Tile;