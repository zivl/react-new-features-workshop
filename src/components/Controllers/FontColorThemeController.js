import React from 'react';

const FontColorThemeController = ({theme, handleThemeChange}) => {
    return (
    <button type="button" className="btn btn-info" onClick={handleThemeChange}>{theme}</button>
    );
};

export default FontColorThemeController;
