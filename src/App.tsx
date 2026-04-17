/* eslint-disable react-hooks/set-state-in-effect */
import { Outlet } from 'react-router-dom';
import './App.scss';
import { useEffect, useState } from 'react';
import { Loader } from './Components/Loader';

export const App = () => { 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);


  return (
    <div className="page container">
      {loading && <Loader />}
      <Outlet />
    </div>
  )
}

export default App;
