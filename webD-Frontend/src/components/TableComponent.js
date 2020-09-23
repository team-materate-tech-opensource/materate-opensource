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
  .table-custom tr:nth-child(odd) > td > div {
    background-color: ${props => props.type=="blue" ? "white" : "#fae9c0"};
  }
  .table-custom tr:nth-child(even) > td > div {
    background-color: ${props => props.type=="blue" ? "#0080FE" : "#eeecec"};
    ${props => props.type=="blue" ? "color: white;" : ""}
  }
  .table-custom tr:first-child > td > div {
    color:white;
    background-color:rgb(0, 128, 254);
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
    ["Heading 1", "Heading 2"],
    ["row 1 data 1", "row 1 data 2"],
    ["row 2 data 1", "row 2 data 2"],
  ],
};
