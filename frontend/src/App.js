//imports
import { Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Login from "./components/login/Logins";

import Postpetition from "./components/formpage/Postpetition";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Petitions from "./components/petitions/petitions";
import Petition from "./components/petitions/petition/petition";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Pending from "./components/Pending/Pending";
import Report from "./components/Pending/Report";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      {/* //static for all pages */}
      <div className="md:flex md:flex-row">
        <Navbar />

        {/* //route through */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/add" Component={Postpetition} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/petitions" Component={Petitions} />
          <Route path="/pending" Component={Pending} />
          <Route path="/report/:currentId" Component={Report} />
          <Route
            path="/petition/:currentId"
            exact={true}
            Component={Petition}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
