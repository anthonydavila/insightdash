import React from 'react';
import Dashboard from './components/Dashboard';
import DataTable from './components/DataTable';
import Chart from './components/Chart';
import DashboardPage from './components/DashboardPage';
import Header from './components/Header';


function App() {
  return (
    <div className="App">

      <Header/>
      <DashboardPage />
      
    </div>
  );
}

export default App;
