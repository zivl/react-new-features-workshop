import React, { useState, useEffect} from 'react'
import { notifications } from '../../services/notifications'

const STATUS = {
  PENDING: 'PENDING',
  OK: 'OK',
  SICK: 'SICK',
  MISSING: 'MISSING'
}
const NOTIFICATIONS = {
  NONE: 'NONE',
  PARENT: 'PARENT',
  DAY_CARE: 'DAY_CARE',
  MISSING_CHILD: 'MISSING_CHILD'
}

const Child = ({child, i}) => {
  const [status, setStatus] = useState(STATUS.PENDING);
  const [notify, setNotify] = useState(NOTIFICATIONS.NONE);

  useEffect(() => {
    switch (notify) {
      case NOTIFICATIONS.MISSING_CHILD: 
       notifications.notifyParentMissingChild(child);
       setStatus(STATUS.MISSING);
       break;
      case NOTIFICATIONS.DAY_CARE: 
      notifications.notifyDayCareStaff('stam message for day care');
      break;
      case NOTIFICATIONS.PARENT: 
        notifications.notifyParent(child, 'stam message for parent');
        break;
      default:
        //none
    }
  }, [child, notify]);

  return (
          <tr>
          <th scope="row">{i}</th>
          <td>{child.name}</td>
          <td>
            <span className={`badge badge-${status === STATUS.SICK ? 'success' : status === STATUS.OK ? 'success' : status === STATUS.MISSING ? 'danger' : 'warning'}`}>{status}</span>
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
                <a className="dropdown-item" href="#" onClick={() => setNotify(NOTIFICATIONS.MISSING_CHILD)}>
                    Notify parent for missing child
                </a>
                <a className="dropdown-item" href="#" onClick={() => setNotify(NOTIFICATIONS.DAY_CARE)}>
                    Notify day care staff
                </a>
                <a className="dropdown-item" href="#" onClick={() => setNotify(NOTIFICATIONS.PARENT)}>
                    Notify general message
                </a>
              </div>
            </div>
                  </td>
                  <td>
                      <div className="btn-group" role="group">
                          <button type="button" className="btn btn-outline-success" onClick={() => setStatus(STATUS.OK)}>Check In</button>
                          <button type="button" className="btn btn-outline-info" onClick={() => setStatus(STATUS.SICK)}>Sick</button>
                    </div>
                  </td>
        </tr>
  )
}

export default Child
