import React from "react";
import "./createpush.css";
import DonutChart from "../donutChart/DonutChart";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default class CreatePush extends React.Component {
  render() {
    return (
      <div>
        <h5 class="topH5">Create New Push</h5>
        <Breadcrumb />
        <div class="container-fluid wd-95">
          <div class="row">
            <div class="col-md-5 bdThin mg-5 mw-24" />
            <div class="col bdThin mg-5">
              <h6 id="cardHeader">Email Traffic</h6>
            </div>
          </div>

          <div class="row">
            {/* <div class="col bdThin mg-5">
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
