import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import ChildrenTable from './components/ChildrenTable/ChildrenTable';
import Controllers from './components/Controllers/Controllers';
import AddChildController from './components/Controllers/AddChildController';
import ToggleThemeController from './components/Controllers/ToggleThemeController';
import ThemeProvider from './components/Providers/ThemeProvider';
import './App.css';
import {API} from "./database/api";

function App() {
    const [theme, setTheme] = useState('light');
    const [children, setChildren] = useState([])

    useEffect ( () => {
        async function fetchData() {
            const childrenList = await API.getChildrenList()
            setChildren(childrenList)
        }

        fetchData()
    }, [])

    return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Header />
            <Controllers>
                <AddChildController setChildren={setChildren}/>
                <ToggleThemeController toggleThemeClick={setTheme}/>
            </Controllers>
            <ChildrenTable children={children}/>
        </ThemeProvider>
    </div>
  );
}

export default App;
