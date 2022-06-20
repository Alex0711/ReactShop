import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import EmailSent from "../containers/EmailSent";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import '../styles/global.scss';

const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/email-sent" element={<EmailSent />}/>
            <Route path="*" element={<NotFound />}/> {/* Este es un default */}
          </Routes>
        </Layout>
      </BrowserRouter>
    );
};

export default App;