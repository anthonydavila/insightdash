import React, { useState } from 'react';
import Dashboard from './Dashboard';
import DataTable from './DataTable';
import Chart from './Chart';
import Header from './Header';

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = [
    { id: 1, name: 'Element at Analysis', value: 'Benefits' },
    { id: 2, name: 'Hot vs Cold Weather performance', value: 'Element at Analysis' },
    { id: 3, name: 'Phycology of DMT Analysis', value: 'Settings Element of Analysis' },
  ].filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dashboard title="Insight Dash">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        
      </div>
      <Chart />
      <DataTable
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'value', label: 'Value' },
        ]}
        data={filteredData}
      />
    </Dashboard>
  );
};

export default DashboardPage;
