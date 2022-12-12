import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import MainLayout from "./layout/mainLayout";


const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Services" element={<Services />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
       
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Main;
