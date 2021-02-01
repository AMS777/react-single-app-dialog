import React, { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [isAppDialogOpen, setIsAppDialogOpen] = useState(false);
  const [appDialogContext, setAppDialogContext] = useState({});

  const openAppDialog = appDialogContext => {
    setAppDialogContext(appDialogContext);
    setIsAppDialogOpen(true);
  };
  const closeAppDialog = () => {
    setIsAppDialogOpen(false);
  };

  const appContextValue = {
    isAppDialogOpen,
    appDialogContext,
    setAppDialogContext,
    openAppDialog,
    closeAppDialog,
  };

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
