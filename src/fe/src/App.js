import AppRoute from './router/app_route';
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
  height: '100%'
};
export default App;
