import React from 'react'

const ChildrenTable = () => {
  return (
    <table class="table">
      <thead class="thead-dark">
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
            <span class="badge badge-warning">Pending</span>
          </td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Notify
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                    Notify parent for missing child
                </a>
                <a class="dropdown-item" href="#">
                    Notify day care staff
                </a>
                <a class="dropdown-item" href="#">
                    Notify general message
                </a>
              </div>
            </div>
                  </td>
                  <td>
                      <div class="btn-group" role="group">
                          <button type="button" class="btn btn-outline-success">Check In</button>
                          <button type="button" class="btn btn-outline-info">Sick</button>
                    </div>
                  </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Assaf Ganor</td>
          <td>
            <span class="badge badge-warning">Pending</span>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ilona Shafir</td>
          <td>
            <span class="badge badge-warning">Pending</span>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Ziv Levy</td>
          <td>
            <span class="badge badge-success">OK</span>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Uri Avraham</td>
          <td>
            <span class="badge badge-danger">Missing</span>
          </td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Alon Gamzo</td>
          <td>
            <span class="badge badge-success">OK</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ChildrenTable
