import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import NotFound from "../pages/NotFound";
import EmailSent from "../pages/EmailSent";
import Layout from "../containers/Layout";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import '../styles/global.scss';
import Orders from "../pages/Orders";

const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/password-recovery" element={<PasswordRecovery />}/>
            <Route path="/email-sent" element={<EmailSent />}/>
            <Route path="/new-password" element={<NewPassword />}/>
            <Route path="/account" element={<MyAccount />}/>
            <Route path="/signup" element={<CreateAccount />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/orders" element={<Orders />}/>
            <Route path="*" element={<NotFound />}/> {/* Este es un default */}
          </Routes>
        </Layout>
      </BrowserRouter>
    );
};

export default App;