import { useEffect } from 'react';
import { keyCodes } from './constants';

const keyDownListeners = [];

document.addEventListener('keydown', (event) => {
  const { keyCode } = event;

  if (!keyCode) return;

  keyDownListeners.forEach((keyDownListener) => {
    const { listener, forKeyCode } = keyDownListener;
    if (!forKeyCode || keyCode === forKeyCode) {
      listener(event);
    }
  });
});

function noOp() {}

export function useOnKeyDown(listener, when, forKeyCode) {
  useEffect(() => {
    if (!when || !listener) return noOp;

    const listenerObject = { listener, forKeyCode };
    keyDownListeners.push(listenerObject)
    return () => {
      keyDownListeners.splice(keyDownListeners.indexOf(listenerObject), 1);
    };
  }, [listener, when, forKeyCode])
}

export function useOnEnterKeyDown(listener, when) {
  useOnKeyDown(listener, when, keyCodes.ENTER);
}