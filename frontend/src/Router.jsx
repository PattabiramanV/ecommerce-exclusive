import React from 'react'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"
import Account from "./pages/Account"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import ProductListing from "./pages/ProductListing"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/account' element={<Account />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}
export default Router