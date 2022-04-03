import { Navbar } from "../../Compoents/Navbar/Navbar"
import { useAuth } from "../../Hooks/useAuth"
import { DashboardView } from "./style"


export function DashboardPage() {

  const { logout} = useAuth()

  return (
    <>
      <Navbar options={[{name: 'Logout', goTo: "/", onclick: logout}]}/>
      <div className="default-container">
        <DashboardView>
          <h1>My Tasks</h1>   
        </DashboardView>
      </div>
    </>
  )
}