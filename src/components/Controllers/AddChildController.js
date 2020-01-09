import React from 'react';

const stamChild = {
    id: '123',
    name: 'Stam Child',
    parentA: {
      name: 'Stam parentA'
    },
    parentB: {
        name: 'Stam parentB'
    }
  };

const AddChildController = ({handleAddChild}) => {
    return (
        <button type="button" className="btn btn-info" onClick={() => handleAddChild(stamChild)}>Add Child</button>
    );
};

export default AddChildController;
