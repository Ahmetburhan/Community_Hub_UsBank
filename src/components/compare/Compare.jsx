import React from "react";
import "./compare.css";
import DonutChart from "../donutChart/DonutChart";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Doughnut } from "react-chartjs-2";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
const data = {
  labels: ["Salary", "Health Insurance Cost"],
  datasets: [
    {
      data: [135000, 2988, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};
const data2 = {
  labels: ["Salary", "Health Insurance Cost"],
  datasets: [
    {
      data: [145000, 8100, 100],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"]
    }
  ]
};
export default class Email extends React.Component {
  componentDidMount() {
    // let chart = am4core.create("chartdiv", am4charts.XYChart);

    // chart.paddingRight = 20;

    // let data = [];
    // let visits = 10;
    // for (let i = 1; i < 366; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    // }

    // chart.data = data;

    // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;

    // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    // let series = chart.series.push(new am4charts.LineSeries());
    // series.dataFields.dateX = "date";
    // series.dataFields.valueY = "value";

    // series.tooltipText = "{valueY.value}";
    // chart.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    // this.chart = chart;

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let iconPath =
      "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z";

    let chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.paddingLeft = 150;

    chart.data = [
      {
        name: "B",
        value: 40,
        disabled: true
      },
      {
        name: "A",
        value: 60
      }
    ];

    let series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    // this makes only A label to be visible
    series.labels.template.propertyFields.disabled = "disabled";
    series.ticks.template.propertyFields.disabled = "disabled";

    series.maskSprite.path = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0;

    series.labelsContainer.width = 100;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingRight = 160;
    chart.legend.paddingBottom = 40;
    let marker = chart.legend.markers.template.children.getIndex(0);
    chart.legend.markers.template.width = 40;
    chart.legend.markers.template.height = 40;
    marker.cornerRadius(20, 20, 20, 20);

    let chart3 = am4core.create("chart3div", am4charts.PieChart);

    // Add data
    chart3.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      }
    ];

    // Add and configure Series
    let pieSeries = chart3.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
    if (this.chart3) {
      this.chart3.dispose();
    }
  }
  render() {
    return (
      <div>
        <h5 class="topH5">USBANK & Intuit Comparison</h5>
        <Breadcrumb />
        <div class="container-fluid wd-95">
          <div class="row">
            <div class="col bdThin mg-5">
              <h6>USBANK Total Compansation</h6>
              <Doughnut data={data} />
            </div>
            <div class="col bdThin mg-5">
              <h6>Intuit Total Compansation</h6>
              <Doughnut data={data2} />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 bdThin mg-5 mw-24">
              {/* <DonutChart data={unsubscribeData} /> */}
            </div>
            <div class="col-md-3 bdThin mg-5 mw-24">
              {/* <DonutChart data={bounceData} /> */}
            </div>
            <div class="col bdThin mg-5">
              <h6 id="cardHeader">Email Traffic</h6>
              <div id="chart3div" style={{ width: "100%", height: "500px" }} />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 bdThin mg-5">
              <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
            </div>
            <div class="col-md-6 bdThin mg-5">
              <div id="chartdiv2" style={{ width: "100%", height: "500px" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
