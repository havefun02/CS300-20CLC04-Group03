import AppRoute from './routers/app_route';
import React from 'react';
function App() {
  const [isLog, setIsLog] = React.useState(false);
  React.useEffect(() => {
    const getLocal = localStorage.getItem('isLog');
    setIsLog(() => getLocal);
  }, []);

  return (
    <div style={style}>
      <AppRoute props={[isLog, setIsLog]}></AppRoute>
    </div>
  );
}
const style = {
  height: '100%'
};
export default App;
