import { AppContextProvider } from 'context/appContext';
import { AppContextNoReRenderProvider } from 'context/appContextNoReRender';

import Homepage from 'pages/homepage';
import AppDialog from 'components/appDialog';

import 'styles/global.css';

function App() {
  return (
    <AppContextNoReRenderProvider>
      <AppContextProvider>
        <Homepage />
        <AppDialog />
      </AppContextProvider>
    </AppContextNoReRenderProvider>
  );
}

export default App;
