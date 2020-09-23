import React from "react";
import { Bar } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: props.display,
      data: {
        labels: props.labels,
        datasets: props.dataset,
      },
      options: {
        title: {
          display: true,
          text: props.title,
          fontSize: 18,
        },
        legend: {
          display: props.displayLegend,
          position: "right",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 20,
                min: 0,
                max: 100,
              },
              scaleLabel: {
                display: props.displayLabelonY,
                labelString: props.labelString,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              barThickness: "35",
            },
          ],
        },
      },
    };
  }

  static defaultProps = {
    displayLegend: false,
    displayLabelonY: false,
    labelString: "",
    title: "",
    display: "bar",
  };

  render() {
    return (
      <React.Fragment>
        <div className="chart-container">
          <Bar data={this.state.data} options={this.state.options} />
        </div>
      </React.Fragment>
    );
  }
}
export default Chart;
