import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";
import NavBar from "../../containers/NavBar/NavBar";

const Dashboard = () => {
  const location = useLocation();
  const query = location.state?.query;
  return (
    <div className="dashboard">
      <NavBar />
      <Card query={query} />
    </div>
  );
};

export default Dashboard;
