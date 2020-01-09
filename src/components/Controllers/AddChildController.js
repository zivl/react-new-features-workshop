import React from 'react';
import {API} from '../../database/api'

const AddChildController = ({setChildren}) => {
    const addChild = async () => {
        const childToAdd = {
            id: '789',
                name: 'Random Name',
            parentA: {
            name: 'Monica Lewinsky'
        },
            parentB: {
                name: 'Bill Clinton'
            }
        }
        console.log('BEFORE ADDING CHILD')
        await API.addChild(childToAdd)
        console.log('ADDED CHILD')
        const children = await API.getChildrenList()
        console.log('Refreshed children: ', children)
        setChildren(children)
    }
    return (
        <button type="button" className="btn btn-info" onClick={addChild}>Add Child</button>
    );
};

export default AddChildController;
