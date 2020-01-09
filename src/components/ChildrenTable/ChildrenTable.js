import React, { useEffect, useState } from 'react'
import ThemeContext from "../Providers/ThemeContext";
import { API } from '../../database/api'
import Child from "./Child";

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
                            <Child child={child} index={index} key={index}/>
                        ))}
                      </tbody>
                   </table>)}
      </ThemeContext.Consumer>
  )
}

export default ChildrenTable
