import "./App.css";
import { Flex } from "@chakra-ui/react";
import { Route, Routes, Router } from "react-router-dom";

import Workspaces from "./pages/workspaces";
import { NavigationProvider } from "./contexts/navigation.context";
import React from "react";
import LandingPage from "./pages/landing";

function App() {
  return (
    <Flex>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Flex>
  );
}

export default App;
