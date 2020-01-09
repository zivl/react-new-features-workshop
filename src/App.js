import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import ChildrenTable from './components/ChildrenTable/ChildrenTable';
import Controllers from './components/Controllers/Controllers';
import AddChildController from './components/Controllers/AddChildController';
import FontColorThemeController from './components/Controllers/FontColorThemeController';
import { API } from './database/api'
import FontColorThemeContext from './components/FontColorThemeContext';
import './App.css';

// class App extends React.Component {
const App = () => {
  const [theme, setTheme] = useState('light');
  const [childs, setChilds] = useState([]);

  const onChangeFontColorTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  async function getChildrenList() {
    const childs = await API.getChildrenList()
    setChilds(childs)
  }

  useEffect ( () => {
    getChildrenList()
  }, [])
  
  const onAddChild = async child => {
      await API.addChild(child);
      getChildrenList()
  }


  // render() {
    return (
      <FontColorThemeContext.Provider value={theme}>
        <div className="App">
            <Header />
        <Controllers>
            <AddChildController handleAddChild={onAddChild}/>
            <FontColorThemeController theme={theme} handleThemeChange={onChangeFontColorTheme}/>
        </Controllers>
        <ChildrenTable childs={childs} />
        </div>
      </FontColorThemeContext.Provider>
    )
  // }
}
  
export default App;
