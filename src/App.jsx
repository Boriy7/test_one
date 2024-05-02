import React from 'react';
import "./App.css";
import Navbar from './components/layouts/navbar/Navbar';
import Footer from './components/layouts/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home/Home"
import Account from "./components/pages/account/Account"
import MarketPlace from "./components/pages/marketplace/MarketPlace"
import Rankings from "./components/pages/rankings/Rankings"
import Wallet from "./components/pages/wallet/Wallet"

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
       <Navbar />
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/market' element={<MarketPlace/>}/>
            <Route path='/rankings' element={<Rankings/>}/>
            <Route path='/wallet' element={<Wallet/>}/>
         </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
