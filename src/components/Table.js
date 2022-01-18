import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Table(props) {
  const { theadTable, data } = props;

  return (
    <Content>
      <table className="table">
        <thead>
          <tr>
            {theadTable && (
              <>
                {theadTable.map((dt, index) => (
                  <th scope="col" key={index}>
                    {dt}
                  </th>
                ))}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((datum, index) => {
            return (
              <tr key={datum.id}>
                {theadTable.map((header, index) => (
                  <td key={index}>
                    <span>{datum[header] || "No data"}</span>
                  </td>
                ))}
                <td>
                  <i className="fas fa-edit cursor-pointer"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Content>
  );
}

const Content = styled.div`
  /* .table {
    thead {
      background: red;
    }
  } */

  .table tbody tr:nth-of-type(odd) {
    background-color: rgb(217, 235, 235);
  }

  .table-hover tbody tr:hover {
    background-color: rgba(122, 114, 81, 0.7);
    color: rgb(112, 24, 78);
  }

  thead {
    background-color: #34495e;
    color: white;
    border-bottom: 2px solid #34495e !important;
  }
`;

// eslint-disable-next-line react/no-typos
Table.PropTypes = {
  theadTable: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
