import React from "react";
import styled from "styled-components";
// import { Row, Col, Container } from "react-bootstrap";

const Styles = styled.div`
  .table-custom {
    font-size: 0.86rem;
    margin: auto;
    border-collapse: separate;
    border-spacing: 8px 4px;
    text-align: center;
  }
  .table-custom td {
    padding: 0.1rem;
    border: none;
  }
  .table-custom td > div {
    padding: 0.5rem 1rem;

    border-radius: 50px;
  }
  .table-custom tr:nth-child(even) > td > div {
    background-color: ${props => props.type=="blue" ? "#DDDADA49" : "#fae9c0"};
  }
  .table-custom tr:nth-child(odd) > td > div {
    background-color: ${props => props.type=="blue" ? "#DDDADA49" : "#fae9c0"};
  }
  .table-custom tr:first-child > td > div {
    background-color: ${props => props.type=="blue" ? "#0080FE" : "#F1F5FC"};
    ${props => props.type=="blue" ? "color: white;" : ""}
    border:1.5px solid black;
    font-weight: bold;
    padding:0;
    padding-top:5px;
    padding-bottom:5px;
    font-size:15px;
  }

  @media all and (max-width: 480px) {
    .table {
      font-size: 12px;
    }
    max-width: 100vw;
      overflow-x: scroll;
  }
`;

export function TableData(object) {
  return object.map((data, index) => {
    return (
      <td key={index} className="table-data">
        <div>{data}</div>
      </td>
    );
  });
}

function tableRows(data) {
  return data.map((value, index) => {
    return (
      <tr key={index} className="table-row">
        {TableData(value)}
      </tr>
    );
  });
}

function TableComponent(props) {
    return (
      <React.Fragment>
        {/* props.data is an array of arrays of row data */}
        <Styles type={props.type}>
          <table className="table-custom w-100">
            <tbody>{tableRows(props.data)}</tbody>
          </table>
        </Styles>
      </React.Fragment>
    )
}
export default TableComponent;

TableComponent.defaultProps = {
  data: [
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
    ["Rank", "Student Id","Name","Total Marks","3D Numbers","Estimates","Patterns","Weights","Time","Clocks","Shapes"],
  ],
};
