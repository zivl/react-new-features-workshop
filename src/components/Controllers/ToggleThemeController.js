import React, {Fragment} from 'react';

const ToggleThemeController = ({toggleThemeClick}) => {
    return (
        <Fragment>
            <button type="button" className="btn btn-secondary" onClick={() => toggleThemeClick('light')}>Light</button>
            <button type="button" className="btn btn-secondary" onClick={() => toggleThemeClick('dark')}>Dark</button>
        </Fragment>
    );
};

export default ToggleThemeController;
