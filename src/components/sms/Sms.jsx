import React from "react";
import "./sms.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default class Sms extends React.Component {
  render() {
    return (
      <div>
        <h5 class="topH5">Sms</h5>
        <Breadcrumb />
        
        <div class="container-fluid wd-95">
          <div class="row">
            <div class="col-md-3 bdThin mg-5 mw-24">
            <h6 id="cardHeader">SMS Sent</h6>
            <h4>71.24%</h4>

            </div>
            <div class="col-md-3 bdThin mg-5 mw-24">
            <h6 id="cardHeader">Delivery Rate</h6>

            </div>
            <div class="col-md-3 bdThin mg-5 mw-24">
            <h6 id="cardHeader">Click Rate</h6>

            </div>
            <div class="col-md-3 bdThin mg-5 mw-24">
            <h6 id="cardHeader">Peak</h6>

            </div>
            <div class="col bdThin mg-5 ">
            <h6 id="cardHeader">Delivery Push</h6>

            </div>
            
          </div>
          <div class="row">
            <div class="col-md-3 bdThin mg-5 mw-24">
            <h6 id="cardHeader">Push Notification by State</h6>

            </div>
            
            <div class="col bdThin mg-5">
            </div>
          </div>

          <div class="row">
            <div class="col bdThin mg-5">
              <h6 id="cardHeader">Top 10 Performers</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
