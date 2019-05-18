import React from "react";
import "./sms.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import { Progress } from "reactstrap";

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

export default class Sms extends React.Component {
  componentDidMount() {
    // Chart 1 data starts here
    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_usaLow;

    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    polygonSeries.data = [
      {
        id: "US-AL",
        value: 4447100
      },
      {
        id: "US-AK",
        value: 626932
      },
      {
        id: "US-AZ",
        value: 5130632
      },
      {
        id: "US-AR",
        value: 2673400
      },
      {
        id: "US-CA",
        value: 33871648
      },
      {
        id: "US-CO",
        value: 4301261
      },
      {
        id: "US-CT",
        value: 3405565
      },
      {
        id: "US-DE",
        value: 783600
      },
      {
        id: "US-FL",
        value: 15982378
      },
      {
        id: "US-GA",
        value: 8186453
      },
      {
        id: "US-HI",
        value: 1211537
      },
      {
        id: "US-ID",
        value: 1293953
      },
      {
        id: "US-IL",
        value: 12419293
      },
      {
        id: "US-IN",
        value: 6080485
      },
      {
        id: "US-IA",
        value: 2926324
      },
      {
        id: "US-KS",
        value: 2688418
      },
      {
        id: "US-KY",
        value: 4041769
      },
      {
        id: "US-LA",
        value: 4468976
      },
      {
        id: "US-ME",
        value: 1274923
      },
      {
        id: "US-MD",
        value: 5296486
      },
      {
        id: "US-MA",
        value: 6349097
      },
      {
        id: "US-MI",
        value: 9938444
      },
      {
        id: "US-MN",
        value: 4919479
      },
      {
        id: "US-MS",
        value: 2844658
      },
      {
        id: "US-MO",
        value: 5595211
      },
      {
        id: "US-MT",
        value: 902195
      },
      {
        id: "US-NE",
        value: 1711263
      },
      {
        id: "US-NV",
        value: 1998257
      },
      {
        id: "US-NH",
        value: 1235786
      },
      {
        id: "US-NJ",
        value: 8414350
      },
      {
        id: "US-NM",
        value: 1819046
      },
      {
        id: "US-NY",
        value: 18976457
      },
      {
        id: "US-NC",
        value: 8049313
      },
      {
        id: "US-ND",
        value: 642200
      },
      {
        id: "US-OH",
        value: 11353140
      },
      {
        id: "US-OK",
        value: 3450654
      },
      {
        id: "US-OR",
        value: 3421399
      },
      {
        id: "US-PA",
        value: 12281054
      },
      {
        id: "US-RI",
        value: 1048319
      },
      {
        id: "US-SC",
        value: 4012012
      },
      {
        id: "US-SD",
        value: 754844
      },
      {
        id: "US-TN",
        value: 5689283
      },
      {
        id: "US-TX",
        value: 20851820
      },
      {
        id: "US-UT",
        value: 2233169
      },
      {
        id: "US-VT",
        value: 608827
      },
      {
        id: "US-VA",
        value: 7078515
      },
      {
        id: "US-WA",
        value: 5894121
      },
      {
        id: "US-WV",
        value: 1808344
      },
      {
        id: "US-WI",
        value: 5363675
      },
      {
        id: "US-WY",
        value: 493782
      }
    ];

    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;

    // Set up custom heat map legend labels using axis ranges
    let minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "Little";
    let maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "A lot!";

    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(
      labelText
    ) {
      return "";
    });

    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3c5bdc");

    this.chart = chart;
    // char 1 data ends here

    ////////////

    // Create chart instance
    let chartDonut = am4core.create("chartdivDonut", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chartDonut.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chartDonut the size of 30% the radius
    chartDonut.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer"
      }
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chartDonut.legend = new am4charts.Legend();

    chartDonut.data = [
      {
        country: "IOS",
        litres: 501.9
      },
      {
        country: "Android",
        litres: 288.8
      }
    ];
    this.chartDonut = chartDonut;

    ///////////
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    } else if (this.chartDonut) {
      this.chartDonut.dispose();
    }
  }
  render() {
    let states = [
      { California: "76" },
      { Florida: "15" },
      { Texas: "33" },
      { "New York": "41" },
      { Pennsylvania: "18" },
      { Illinous: "12" },
      { Michigan: "9" }
    ];

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
              <h6 id="cardHeader">SMS by State</h6>
              {states.map(state => {
                return (
                  <div style={{ marginBottom: "20px" }}>
                    <div className="">
                      <span>{Object.keys(state)[0]}</span>
                      <span style={{ float: "right" }}>
                        %{Object.values(state)[0]}
                      </span>
                    </div>
                    <Progress value={Object.values(state)[0]} />
                  </div>
                );
              })}{" "}
            </div>

            <div class="col-auto bdThin mg-5">
              <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
            </div>
            <div class="col-md-3 bdThin mg-5 mw-24">
              <h6 id="cardHeader">Mobile</h6>
              <div
                id="chartdivDonut"
                style={{ width: "100%", height: "500px" }}
              />
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
