import React from 'react';
import Header from './components/Header/Header';
import ChildrenTable from './components/ChildrenTable/ChildrenTable';
import Controllers from './components/Controllers/Controllers';
import AddChildController from './components/Controllers/AddChildController';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Controllers>
        <AddChildController />
      </Controllers>
      <ChildrenTable />
    </div>
  );
}

export default App;
