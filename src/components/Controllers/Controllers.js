import React from 'react';
import FontColorThemeContext from '../FontColorThemeContext'

class Controllers extends React.Component {
    static contextType = FontColorThemeContext;

    render(){
    return (
        <div className={`jumbotron ${this.context}`}>
            <h1 className="display-4">Welcome Dear Ganenet/Ganan</h1>
            <p className="lead">Here you may find useful controllers</p>
            <hr className="my-4" />
            <div className="btn-group" role="group">{this.props.children}</div>
        </div>
    );
    }
};

export default Controllers;
