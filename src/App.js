import React, { useState } from 'react';
import Header from './components/Header/Header';
import ChildrenTable from './components/ChildrenTable/ChildrenTable';
import Controllers from './components/Controllers/Controllers';
import AddChildController from './components/Controllers/AddChildController';
import ToggleThemeController from './components/Controllers/ToggleThemeController';
import ThemeProvider from './components/Providers/ThemeProvider';
import ThemeContext from './components/Providers/ThemeContext';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <ThemeContext.Consumer>
                {theme => <Header theme={theme}/>}
            </ThemeContext.Consumer>
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
