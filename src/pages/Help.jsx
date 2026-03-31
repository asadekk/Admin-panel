import './App.css'
function Help (){
    return <>
   
    <div className="admin-container">
      
      {/* SIDEBAR
      <aside className="sidebar">
        <div className="sidebar-logo">MY ADMIN</div>
        <nav className="nav-menu">
          <a href="#home" className="nav-item active">Bosh sahifa</a>
          <a href="#users" className="nav-item">Foydalanuvchilar</a>
          <a href="#stats" className="nav-item">Statistika</a>
          <a href="#settings" className="nav-item">Sozlamalar</a>
        </nav>
      </aside> */}

      {/* RIGHT SIDE */}
      <div className="main-area">
        
        {/* NAVBAR */}
        <header className="navbar">
          <div className="nav-left">
            <h2 style={{fontWeight: '600'}}>Dashboard</h2>
          </div>
          <div className="nav-right" style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <span>🔔</span>
            <div className="profile-circle" style={{background: '#6366f1', width: '35px', height: '35px', borderRadius: '50%'}}></div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="content-wrapper">
          
          <div className="stats-grid">
            <div className="stat-card">
              <p>Daromad</p>
              <h3>$12,450</h3>
              <span style={{color: 'green'}}>+12%</span>
            </div>
            <div className="stat-card">
              <p>Mijozlar</p>
              <h3>1,240</h3>
              <span style={{color: 'blue'}}>Faol</span>
            </div>
            <div className="stat-card">
              <p>Buyurtmalar</p>
              <h3>456</h3>
              <span style={{color: 'orange'}}>Jarayonda</span>
            </div>
          </div>

          <section className="data-table" style={{background: 'white', padding: '20px', borderRadius: '12px'}}>
            <h3>Oxirgi amallar</h3>
            <hr style={{margin: '15px 0', opacity: '0.1'}} />
            <p>Bu yerda jadval yoki boshqa ma'lumotlar bo'ladi...</p>
          </section>

        </main>
      </div>
    </div>
       
    </>
}
export default Help