import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Basket, NotFound, ItemPage } from "./pages";

import './assets/scss/style.scss';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <main className="page">
            <div className="container">
               <Routes>
                  <Route exaxt path="/" element={<Home />} />
                  <Route exact path="/basket" element={<Basket />} />
                  <Route exact path='/item/:id' element={<ItemPage />} />
                  <Route exact path="*" element={<NotFound />} />
               </Routes>
            </div>
         </main>
      </div>
   );
}

export default App;
