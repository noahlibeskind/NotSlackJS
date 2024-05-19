import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "../../contexts/navigation.context";
import LoginPage from "../login";
import Workspaces from "../workspaces";

const LandingPage = () => {
  const { isAuthenticated } = useNavigation();
  return isAuthenticated ? <Workspaces /> : <LoginPage />;
};

export default LandingPage;
