import './App.css'
function Subscription (){
    return <>
        <h1>
            <main className="modern-main">
      {/* Salomlashish qismi */}
      <section className="welcome-section">
        <h1>Xush kelibsiz, Admin! 👋</h1>
        <p style={{color: '#94a3b8'}}>Bugungi tizim holati va yangiliklar bilan tanishing.</p>
      </section>

      <div className="widgets-grid">
        
        {/* CHAP TARAF: Asosiy statistika grafigi */}
        <div className="glass-card">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>Haftalik Aktivlik</h3>
            <select style={{background: 'none', color: 'white', border: '1px solid #475569', borderRadius: '5px'}}>
              <option>Oxirgi 7 kun</option>
              <option>Oxirgi 30 kun</option>
            </select>
          </div>
          
          <div className="chart-placeholder">
            <span style={{color: '#6366f1'}}>Grafik bu yerda (Chart.js yoki Recharts)</span>
          </div>
          
          <div style={{marginTop: '20px', display: 'flex', gap: '40px'}}>
            <div>
              <p style={{fontSize: '12px', color: '#94a3b8'}}>Tashriflar</p>
              <h4 style={{fontSize: '20px'}}>12,840</h4>
            </div>
            <div>
              <p style={{fontSize: '12px', color: '#94a3b8'}}>Konversiya</p>
              <h4 style={{fontSize: '20px', color: '#10b981'}}>3.2%</h4>
            </div>
          </div>
        </div>

        {/* O'NG TARAF: Tezkor amallar va bildirishnomalar */}
        <div className="glass-card">
          <h3>Tezkor Amallar</h3>
          <div className="quick-actions" style={{marginTop: '20px'}}>
            <button className="action-btn">+ Yangi mahsulot</button>
            <button className="action-btn" style={{background: '#334155'}}>Hisobotni yuklash</button>
          </div>

          <h3 style={{marginTop: '30px'}}>Eslatmalar</h3>
          <ul style={{listStyle: 'none', padding: 0, marginTop: '15px'}}>
            <li style={{marginBottom: '10px', fontSize: '14px', display: 'flex', gap: '10px'}}>
              <span style={{color: '#f59e0b'}}>●</span> Server yangilanishi (22:00)
            </li>
            <li style={{marginBottom: '10px', fontSize: '14px', display: 'flex', gap: '10px'}}>
              <span style={{color: '#10b981'}}>●</span> Yangi mijoz ro'yxatdan o'tdi
            </li>
          </ul>
        </div>

      </div>
    </main>
        </h1>
    </>
}
export default Subscription