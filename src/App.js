import React, { useState } from 'react';
import Header from './components/Header/Header';
import ChildrenTable from './components/ChildrenTable/ChildrenTable';
import Controllers from './components/Controllers/Controllers';
import AddChildController from './components/Controllers/AddChildController';
import ToggleThemeController from './components/Controllers/ToggleThemeController';
import ThemeProvider from './components/Providers/ThemeProvider';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Header />
            <Controllers>
                <AddChildController />
                <ToggleThemeController toggleThemeClick={setTheme}/>
            </Controllers>
            <ChildrenTable />
        </ThemeProvider>
    </div>
  );
}

export default App;
