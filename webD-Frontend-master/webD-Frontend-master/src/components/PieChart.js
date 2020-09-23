import React from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["L1", "L5", "L3", "L10,L11", "L1,L4"],
        datasets: [
          {
            label: "% error share",
            backgroundColor: [
              "#B21F00",
              "#C9DE00",
              "#2FDE00",
              "#00A6B4",
              "#6800B4",
            ],
            hoverBackgroundColor: [
              "#501800",
              "#4B5000",
              "#175000",
              "#003350",
              "#35014F",
            ],
            data: [50, 10, 10, 20, 10],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="pie-container">
        <Pie
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: "Error Share",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
export default PieChart;
