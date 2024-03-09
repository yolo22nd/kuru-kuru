import './App.css'
import React from 'react';
import { BrowserRouter ,Routes, Route, } from 'react-router-dom'
// import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <AuthProvider>   */}
            <Routes>      
              {/* <Route element={<Loginpage/>} path='/login'/>   */}
              <Route element={<Navbar/>} path='/'/>  
              {/* <Route element={<Registerpage/>} path='/register'/>   */}
            </Routes>
          {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
