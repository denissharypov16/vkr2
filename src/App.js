import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';
import { paramsArray } from './components/params';
import React from 'react';
import Busket from './components/busket';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navigation />
      <Busket />
      <Routes>
        {
          paramsArray.map((param, index) => {
            return (
              <Route key={index} path={`/${param.path}`} element={param.page} />
            )
          })
        }
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;