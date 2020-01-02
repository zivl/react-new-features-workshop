import React from 'react';

const Controllers = ({children}) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Welcome Dear Ganenet/Ganan</h1>
            <p className="lead">Here you may find useful controllers</p>
            <hr className="my-4" />
            <div className="btn-group" role="group">{children}</div>
        </div>
    );
};

export default Controllers;
