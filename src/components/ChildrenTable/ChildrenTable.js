import React from 'react'
import ThemeContext from "../Providers/ThemeContext";

const ChildrenTable = () => {
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
                        <tr>
                          <th scope="row">1</th>
                          <td>Yael Zaritsky</td>
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
                        <tr>
                          <th scope="row">2</th>
                          <td>Assaf Ganor</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Ilona Shafir</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Ziv Levy</td>
                          <td>
                            <span className="badge badge-success">OK</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Uri Avraham</td>
                          <td>
                            <span className="badge badge-danger">Missing</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Alon Gamzo</td>
                          <td>
                            <span className="badge badge-success">OK</span>
                          </td>
                        </tr>
                      </tbody>
                   </table>)}
      </ThemeContext.Consumer>
  )
}

export default ChildrenTable
