import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home'
import History from './components/History'
import Recommendations from './components/Recommendations'


function App() {
  const RouteWrapper = () => {
    let routes = useRoutes([
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/home', element: <Home /> },
      { path: '/payment-history', element: <History /> },
      { path: '/recs', element: <Recommendations /> },
     
    ])
    return routes;
  }
  return (
    <div>
      <AuthContextProvider>
      {/* <Navbar/> */}
      <Router>
        <RouteWrapper />
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
