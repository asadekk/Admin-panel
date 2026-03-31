import { Link, Outlet } from "react-router-dom"
import './App.css'
function Layout() {
    return <>

        <div style={{ display: 'flex' }}>
            <div style={{ width: '300px', backgroundColor: '#5041BC', height: '100vh' }}>
                 <img style={{width:'200px',marginLeft:"50px",marginTop:'50px'}} src="/image.png" alt="logo" />
                 <hr style={{margin:'0px 30px'}} />
                <div className="adverb-menu">
                    
                    <Link className="menu-1" to={'/About'}><img style={{width:'12px',height:"16px",marginRight:'40px'}} src="/Group 6.png" alt="logo" />Claims</Link>
                    <Link className="menu-1" to={'/Subscription'}><img style={{width:'12px',height:"16px",marginRight:'40px'}} src="/Group.png" alt="logo" />Subscription</Link>
                    <Link className="menu-1" to={'/Health'}><img style={{width:'12px',height:"16px",marginRight:'40px'}} src="/Path.png" alt="logo" />Health</Link>
                    <Link className="menu-1" to={'/Help'}><img style={{width:'12px',height:"16px",marginRight:'40px'}} src="/Health.png" alt="logo" />Biller Que</Link>
                </div>
            </div>
            <main style={{ width: '80%' }}>

                <Outlet></Outlet>
            </main>
        </div>
    </>
}
export default Layout