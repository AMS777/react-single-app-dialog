import { useEffect, useRef } from 'react';

export function useEffectSkipFirstRender(callback, dependencies) {
  // useRef instead of useState not to trigger a render when updated
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    callback();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
