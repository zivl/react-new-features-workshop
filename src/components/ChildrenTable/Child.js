import React, { useState } from 'react'
import { notifications } from '../../services/notifications'

const Child = ({child, index}) => {
  const [checkedIn, setCheckedIn] = useState(false)
  const [sick, setSick] = useState(false)

  return (<tr key={index}>
            <th key={index} scope="row">{index}</th>
            <td>{child.name}</td>
            <td>
                {!sick && !checkedIn && (<span className="badge badge-warning">Pending</span>)}
                {sick && (<span className="badge badge-info">Sick</span>)}
                {checkedIn && (<span className="badge badge-success">ok</span>)}
            </td>
            <td>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Notify
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" onClick={() => notifications.notifyParentMissingChild(child)}>
                            Notify parent for missing child
                        </a>
                        <a className="dropdown-item" href="#" onClick={() => notifications.notifyDayCareManager('WHAAAT')}>
                            Notify day care staff
                        </a>
                        <a className="dropdown-item" href="#" onClick={() => notifications.notifyDayCareManager('WHAAAT')}>
                            Notify general message
                        </a>
                    </div>
                </div>
            </td>
            <td>
                {(!checkedIn && !sick) ? (<div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={() => setCheckedIn(true)} >Check In</button>
                    <button type="button" className="btn btn-outline-info" onClick={() => setSick(true)} >Sick</button>
                </div>) : new Date().toDateString()}
            </td>
        </tr>)
}

export default Child
