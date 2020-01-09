import React from 'react'
import ThemeContext from './ThemeContext'

class ThemeProvider extends React.Component {

    // state = {theme: 'light'};
    props = {theme: 'light'}
    render() {
        return (
            <ThemeContext.Provider value={this.props.theme}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider