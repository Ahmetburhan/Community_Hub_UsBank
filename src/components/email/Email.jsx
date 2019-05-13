import React from "react";
import "./email.css";
import DonutChart from "../donutChart/DonutChart";
import Breadcrumb from "../breadcrumb/Breadcrumb";
const emailData = {
  labels: ["Email Sent", "Opened", "Bounced"],
  datasets: [
    {
      data: [5500, 4300, 1200],
      backgroundColor: ["#004491", "#f2f2f2", "#cd0000"],
      hoverBackgroundColor: ["#004491", "#f2f2f2", "#cd0000"]
    }
  ]
};
const deliveryData = {
  labels: ["Delivery Rate", "Undeliverable"],
  datasets: [
    {
      data: [8590, 1410],
      backgroundColor: ["#00cadb", "#f2f2f2"],
      hoverBackgroundColor: ["#00cadb", "#f2f2f2"]
    }
  ]
};
const openData = {
  labels: ["Open Rate", "Bounced"],
  datasets: [
    {
      data: [6500, 3500],
      backgroundColor: ["#009100", "#f2f2f2"],
      hoverBackgroundColor: ["#009100", "#f2f2f2"]
    }
  ]
};
const clickData = {
  labels: ["Click Rate", "Undeliverable"],
  datasets: [
    {
      data: [33.4, 66.6],
      backgroundColor: ["#6f6f6f", "#f2f2f2"],
      hoverBackgroundColor: ["#6f6f6f", "#f2f2f2"]
    }
  ]
};
const unsubscribeData = {
  labels: ["Subscribed", "UnSubscribed"],
  datasets: [
    {
      data: [4300, 700],
      backgroundColor: ["#f2f2f2", "#cd0000"],
      hoverBackgroundColor: ["#f2f2f2", "#cd0000"]
    }
  ]
};
const bounceData = {
  labels: ["Opened", "Bounced"],
  datasets: [
    {
      data: [8900, 1100],
      backgroundColor: ["#f2f2f2", "#2f2f3c"],
      hoverBackgroundColor: ["#f2f2f2", "#2f2f3c"]
    }
  ]
};
export default class Email extends React.Component {
  render() {
    return (
      <div>
        <h5 class="topH5">Email</h5>
        <Breadcrumb />
        <div class="container-fluid wd-95">

        <div class="row">
          <div class="col-md-3 bdThin mg-5 mw-24">
            <DonutChart data={emailData} />
          </div>
          <div class="col-md-3 bdThin mg-5 mw-24">
            <DonutChart data={deliveryData} />
          </div>
          <div class="col-md-3 bdThin mg-5 mw-24">
            <DonutChart data={openData} />
          </div>
          <div class="col-md-3 bdThin mg-5 mw-24">
            <DonutChart data={clickData} />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 bdThin mg-5 mw-24">
            <DonutChart data={unsubscribeData} />
          </div>
          <div class="col-md-3 bdThin mg-5 mw-24">
            <DonutChart data={bounceData} />
          </div>
          <div class="col bdThin mg-5" />
        </div>
     
      <div class="row">
          <div class="col bdThin mg-5">
          Top Ten Performers
          </div>
      </div>


      </div>
      </div>
    );
  }
}
