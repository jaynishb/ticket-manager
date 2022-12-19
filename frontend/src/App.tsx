import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from './Layout';
import { TicketList } from './TicketList';
import { TicketDetails } from './TicketDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<TicketList />} />
              <Route path="/tickets/:id" element={<TicketDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>

    </div>
  );
}

export default App;
