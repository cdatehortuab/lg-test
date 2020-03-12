import React, { useCallback, useMemo } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

import './Tile.css';
import { useOnEnterKeyDown } from './KeyEventsHandler';

export function Tile({ id, isSelected, className, onSelect, focused, children }) {
  const onClick = useCallback(
    () => {
      console.log('Me han hecho click', id);
      onSelect(id);
    },
    [id, onSelect],
  );

  useOnEnterKeyDown(onClick, focused);

  const classNameString = useMemo(() => (
    [
      'Tile',
      isSelected && 'selected',
      focused && 'focused',
      className,
    ].filter(Boolean).join(' ')
  ), [isSelected, className, focused])

  return (
    <button className={classNameString} onClick={onClick}>
      {children}
    </button>
  )
}

export const FocusableTile = withFocusable()(Tile);
