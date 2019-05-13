import "./donutchart.css";
import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

Chart.defaults.global.animation.animationSteps = 100;
Chart.defaults.global.animation.duration = 3000;
Chart.defaults.global.animation.animationEasing = "easeInOutBounce";
Chart.defaults.global.animation.animateScale = true;
Chart.defaults.global.animation.bezierCurve = true;
Chart.defaults.global.animation.bezierCurveTension = 0.4;
Chart.defaults.global.animation.onComplete = () => {
  console.log("its done");
};
// Chart.defaults.global.

export default class DonutChart extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: this.props.data
  };

  componentDidMount() {}

  componentWillUnmount() {}
  chartRef = React.createRef();

  render() {
    // const data = {
    //   labels: ["Email Sent", "Opened", "Bounced"],
    //   datasets: [
    //     {
    //       data: [5500, 4300, 1200],
    //       backgroundColor: ["#004491", "#f2f2f2", "#cd0000"],
    //       hoverBackgroundColor: ["#004491", "#f2f2f2", "#cd0000"]
    //     },
    //   ]
    // };
    const options = {
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Email Sent"
      },
      responsive: true,
      layout: {
        padding: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      animation: {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 1000,
        animationEasing: "easeOutQuad",
        animateRotate: true,
        animateScale: true,
        responsive: true,
        maintainAspectRatio: true,
        showScale: false
      },

      legend: {
        display: true,
        position: "bottom",
        labels: {}
      }
    };
    return (
      <div>
        {/* <h4>Doughnut Example</h4> */}
        <Doughnut
          width="75"
          height="75"
          data={this.state.data}
          options={options}
        />
      </div>
    );
  }
}
