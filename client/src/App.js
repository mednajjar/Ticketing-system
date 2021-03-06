import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './Routes';
import { useDispatch } from 'react-redux'
import { ifLoged } from './redux/slices/authSlice'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './History'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ifLoged())
  }, [dispatch])

  return (
      <Router history={history}>
        <Navbar />
        <Routes />
      </Router>
  );
}

export default App;
