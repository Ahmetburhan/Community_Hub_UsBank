import React from "react";
import "./createpush.css";
import DonutChart from "../donutChart/DonutChart";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Highlight from "react-highlight";

export default class CreatePush extends React.Component {
  render() {
    return (
      <div>
        <h5 class="topH5">Create New Push</h5>
        <Breadcrumb />
        <div class="container-fluid wd-95">
          <div class="row">
            <div class="col-md-5 bdThin mg-5 mw-24 bg">
              {/* <div class="snippet"> */}
              <div class="">
                <div>
                  {/* <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight> */}

                  <Highlight language="javascript">
                    {`function foo()
                     { return 'bar' }`}
                  </Highlight>
                </div>
              </div>
            </div>
            <div class="col bdThin mg-5">
              <h6 id="cardHeader">Form</h6>
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
