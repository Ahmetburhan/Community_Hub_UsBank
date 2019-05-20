import React from "react";
import "./email.css";
import DonutChart from "../donutChart/DonutChart";
import Breadcrumb from "../breadcrumb/Breadcrumb";

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4charts from "@amcharts/amcharts4/charts";
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

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
  componentDidMount() {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        year: "2007",
        value1: 1691,
        value2: 737
      },
      {
        year: "2008",
        value1: 1098,
        value2: 680,
        value3: 910
      },
      {
        year: "2009",
        value1: 975,
        value2: 664,
        value3: 670
      },
      {
        year: "2010",
        value1: 1246,
        value2: 648,
        value3: 930
      },
      {
        year: "2011",
        value1: 1218,
        value2: 637,
        value3: 1010
      },
      {
        year: "2012",
        value1: 1913,
        value2: 133,
        value3: 1770
      },
      {
        year: "2013",
        value1: 1299,
        value2: 621,
        value3: 820
      },
      {
        year: "2014",
        value1: 1110,
        value2: 10,
        value3: 1050
      },
      {
        year: "2015",
        value1: 765,
        value2: 232,
        value3: 650
      },
      {
        year: "2016",
        value1: 1145,
        value2: 219,
        value3: 780
      },
      {
        year: "2017",
        value1: 1163,
        value2: 201,
        value3: 700
      },
      {
        year: "2018",
        value1: 1780,
        value2: 85,
        value3: 1470
      },
      {
        year: "2019",
        value1: 1580,
        value2: 285
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;
    categoryAxis.renderer.minLabelPosition = 0.05;
    categoryAxis.renderer.maxLabelPosition = 0.95;

    let categoryAxisTooltip = categoryAxis.tooltip.background;
    categoryAxisTooltip.pointerLength = 0;
    categoryAxisTooltip.fillOpacity = 0.3;
    categoryAxisTooltip.filters.push(new am4core.BlurFilter()).blur = 5;
    categoryAxis.tooltip.dy = 5;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.minLabelPosition = 0.05;
    valueAxis.renderer.maxLabelPosition = 0.95;

    let valueAxisTooltip = valueAxis.tooltip.background;
    valueAxisTooltip.pointerLength = 0;
    valueAxisTooltip.fillOpacity = 0.3;
    valueAxisTooltip.filters.push(new am4core.BlurFilter()).blur = 5;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.categoryX = "year";
    series1.dataFields.valueY = "value1";
    series1.fillOpacity = 1;
    series1.stacked = true;

    let blur1 = new am4core.BlurFilter();
    blur1.blur = 20;
    series1.filters.push(blur1);

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.categoryX = "year";
    series2.dataFields.valueY = "value2";
    series2.fillOpacity = 1;
    series2.stacked = true;

    let blur2 = new am4core.BlurFilter();
    blur2.blur = 3;
    series2.filters.push(blur2);

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.categoryX = "year";
    series3.dataFields.valueY = "value3";
    series3.stroke = am4core.color("#fff");
    series3.strokeWidth = 2;
    series3.strokeDasharray = "3,3";
    series3.tooltipText = "{categoryX}\n---\n[bold font-size: 20]{valueY}[/]";
    series3.tooltip.pointerOrientation = "vertical";
    series3.tooltip.label.textAlign = "middle";

    let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.circle.radius = 8;
    bullet3.fill = chart.colors.getIndex(3);
    bullet3.stroke = am4core.color("#fff");
    bullet3.strokeWidth = 3;

    let bullet3hover = bullet3.states.create("hover");
    bullet3hover.properties.scale = 1.2;

    let shadow3 = new am4core.DropShadowFilter();
    series3.filters.push(shadow3);

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
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
            <div class="col bdThin mg-5 mw-46">
              <h6 id="cardHeader">Email Traffic</h6>
              <div id="chartdiv" style={{ width: "100%", height: "300px" }} />
            </div>
          </div>

          <div class="row">
            <div class="col bdThin mg-5">
              <h6 id="cardHeader">Top Ten Performers</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
