import React, { createContext, useRef } from 'react';

import AppDialogNoContextReRender from 'components/appDialogNoContextReRender';

const AppContextNoReRender = createContext();

function AppContextNoReRenderProvider({ children }) {
  const appContext = useRef({});

  return (
    <AppContextNoReRender.Provider value={appContext.current}>
      <AppDialogNoContextReRender />
      {children}
    </AppContextNoReRender.Provider>
  );
}

export { AppContextNoReRender, AppContextNoReRenderProvider };
