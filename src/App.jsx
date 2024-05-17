import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// npm install react-router-dom , do this at terminal
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NotFound from "./components/NotFound"


/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <BrowserRouter>

        <Nav />
       
          <Routes>
            <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
            <Route path="/staff" element={<StaffList employees={employees} />} />

            <Route path="/pets" element={<Navigate to="/pets/cats" />} />

            <Route path="/pets/cats" element={<PetsList pets={pets} type="cats" />} />
            <Route path="/pets/dogs" element={<PetsList pets={pets} type="dogs" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
   
        <Footer />



      </BrowserRouter>

    </div>

  );
}

export default App;
