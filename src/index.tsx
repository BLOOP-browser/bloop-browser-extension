import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login-page/login';

import AddLinkPage from './Pages/Add-link-page/add-link';
import AddToListPage from './Pages/Add-to-list-page/add-to-list';
import AddListPage from './Pages/Add-list-page/add-list-page';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// root.render(
// /*   <React.StrictMode>
//     <App />
//   </React.StrictMode> */

//   <BrowserRouter>
//   <Routes>


  
//   <Route path="/login" element={<Login onLogin = {(email) => console.log(email)}/>} />
//   <Route path="/addlink" element={< AddLinkPage/>} />
//   <Route path="/addtolist" element={< AddToListPage/>} />
//   <Route path= "/addlist" element ={<AddListPage/>} />

//   </Routes>
//   </BrowserRouter>  
// );

// reportWebVitals();
