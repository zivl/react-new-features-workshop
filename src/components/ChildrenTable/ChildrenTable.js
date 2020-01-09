import React from 'react'
import Child from './Child'

const ChildrenTable = ({childs}) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Status</th>
          <th scope="col">Notification</th>
          <th scope="col">Check-In</th>
        </tr>
      </thead>
      <tbody>
          {
            childs.map((child, i) => {
              return (
                <Child child={child} key={i} i={i}/>
              )
            })
          }
      </tbody>
    </table>
  )
}

export default ChildrenTable
