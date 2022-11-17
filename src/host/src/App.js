import AppRoute from './routers/app_route';
import React, { createContext } from 'react';
import { ContextProvider } from './context/context';
function App() {
  return (
    <ContextProvider>
      <div style={style}>
        <AppRoute></AppRoute>
      </div>
    </ContextProvider>
  );
}
const style = {
  height: '100%',
  overflow: 'hidden'
};
export default App;
