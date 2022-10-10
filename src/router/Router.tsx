import { createContext, useEffect } from "react";
import { firebase, auth } from "../services/firebase";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { NewRoom } from "../Pages/NewRoom";
import { AuthContextProvider } from "../contexts/AuthContext";

function Router() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Router;
