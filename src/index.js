import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Email from "../src/components/email/Email";
import Push from "../src/components/push/Push";
import Sms from "../src/components/sms/Sms";
import Navbar from "../src/components/navbar/Navbar";
import DonutChart from "../src/components/donutChart/DonutChart";
import CreatePush from "../src/components/createPush/CreatePush";


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={Email} />
        <Route path="/push" component={Push} />
        <Route path="/sms" component={Sms} />
        <Route path="/donutChart" component={DonutChart} />
        <Route path="/createpush" component={CreatePush} />

      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
