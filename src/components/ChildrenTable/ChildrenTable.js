import React, { useEffect, useState } from 'react'
import ThemeContext from "../Providers/ThemeContext";
import { API } from '../../database/api'

const ChildrenTable = () => {
    const [children, setChildren] = useState([])
    useEffect ( () => {
        async function fetchData() {
            const childrenList = await API.getChildrenList()
            setChildren(childrenList)
        }

        fetchData()
    }, [])
  return (
      <ThemeContext.Consumer>
        {theme => (<table className={theme === 'light' ? "table table-light" : "table table-dark"}>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Full Name</th>
                          <th scope="col">Status</th>
                          <th scope="col">Notification</th>
                          <th scope="col">Check-In</th>
                        </tr>
                      </thead>
                      <tbody>
                        {children.map((child, index) => (
                            <tr key={index}>
                                <th key={index} scope="row">{index}</th>
                                <td>{child.name}</td>
                                <td>
                                    <span className="badge badge-warning">Pending</span>
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
                                            <a className="dropdown-item" href="#">
                                                Notify parent for missing child
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                Notify day care staff
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                Notify general message
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-outline-success">Check In</button>
                                        <button type="button" className="btn btn-outline-info">Sick</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                      </tbody>
                   </table>)}
      </ThemeContext.Consumer>
  )
}

export default ChildrenTable
