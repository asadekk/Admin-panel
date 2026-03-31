import { Link, Outlet } from "react-router-dom"
import './App.css'
function Layout() {
    return <>

        <div style={{ display: 'flex' }}>
            <div style={{ width: '300px', backgroundColor: '#5041BC', height: '100vh' }}>
                <div className="adverb-menu">
                    <Link className="menu-1" to={'/About'}>Claims</Link>
                    <Link className="menu-1" to={'/Subscription'}>Subscription</Link>
                    <Link className="menu-1" to={'/Health'}>Health</Link>
                    <Link className="menu-1" to={'/Help'}>Biller Queue</Link>
                </div>
            </div>
            <main style={{ width: '80%' }}>

                <Outlet></Outlet>
            </main>
        </div>
    </>
}
export default Layout