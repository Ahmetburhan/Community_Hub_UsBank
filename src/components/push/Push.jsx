import React from "react";
import "./push.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";


export default class Push extends React.Component {
  render() {
    return (
      <div>
        <h5 class="topH5">Push Notification</h5>
        <Breadcrumb />
    
        <div class="container-fluid wd-95">
          <div class="row">
            <div class="col-md-3 bdThin mg-5 mw-24">
            <h6 id="cardHeader">Push Notification Sent</h6>

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
