import { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <div className="px-3">
        <AppRoutes />
      </div>
       <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
