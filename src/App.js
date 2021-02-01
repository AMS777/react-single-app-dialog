import { AppContextProvider } from 'context/appContext';

import Homepage from 'pages/homepage';
import AppDialog from 'components/appDialog';

import 'styles/global.css';

function App() {
  return (
    <AppContextProvider>
      <Homepage />
      <AppDialog />
    </AppContextProvider>
  );
}

export default App;
