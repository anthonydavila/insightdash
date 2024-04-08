import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = ({ columns, data }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>{column.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.key}>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

export default DataTable;
