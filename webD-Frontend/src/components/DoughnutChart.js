import React from "react";
import { Doughnut } from "react-chartjs-2";
// import styled from "styled-components";

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      datasets: [
        {
          label: "",
          backgroundColor: [`${this.props.secondary}`, `${this.props.primary}`],
          data: props.data,
        },
      ],
      text: "text inside the doughnut",
    };
  }

  render() {
    return (
      <Doughnut
        width={300}
        height={300}
        data={this.state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: `${this.props.cutoutpercent}`,
        }}
      />
    );
  }
}
export default DoughnutChart;

DoughnutChart.defaultProps = {
  cutoutpercent: "70",
  primary: "rgb(0, 128, 254)",
  secondary: "#0032ad"
};
