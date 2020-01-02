import React from 'react';

const Controllers = ({children}) => {
    return (
        <div class="jumbotron">
            <h1 class="display-4">Welcome Dear Ganenet/Ganan</h1>
            <p class="lead">Here you may find useful controllers</p>
            <hr class="my-4" />
            <div class="btn-group" role="group">{children}</div>
        </div>
    );
};

export default Controllers;
