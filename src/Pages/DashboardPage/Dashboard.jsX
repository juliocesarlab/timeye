import { useEffect, useState } from 'react'
import { Navbar } from "../../Compoents/Navbar/Navbar"
import { useAuth } from "../../Hooks/useAuth"
import { getTasks } from '../../services/api'
import { DashboardView } from "./style"



export function DashboardPage() {

  const { user } = useAuth()
  const [tasks, setTasks] = useState([])
  const { logout } = useAuth()

  useEffect(() => { 
    (async function() {
      const response = await getTasks(user.id)
      setTasks(response.data.tasks);
    })()
  }, [])

  return (
    <>
      <Navbar options={[{name: 'Logout', goTo: "/", onclick: logout}]}/>
      <div className="default-container">
        <DashboardView>
          <div className="dashboard-heading">
            <h1>My Tasks</h1>   
          </div>
          <div className="dashboard-body">
            {tasks.map((task) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </div>
        </DashboardView>
      </div>
    </>
  )
}