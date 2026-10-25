import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Code Checkout', status: 'completed' },
        { id: 2, title: 'Build Application', status: 'completed' },
        { id: 3, title: 'Run Unit Tests', status: 'in-progress' },
        { id: 4, title: 'Deploy to Cloud', status: 'pending' }
      ])
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="glass-card">
      <header>
        <h1>DevFlow CI/CD</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '3rem' }}>
          Real-time Automation & Deployment Dashboard
        </p>
      </header>

      <div className="pipeline-viz">
        <div className="step">
          <div className="step-circle">1</div>
          <div className="step-label">Build</div>
        </div>
        <div className="connector"></div>
        <div className="step">
          <div className="step-circle" style={{ background: '#a855f7' }}>2</div>
          <div className="step-label">Test</div>
        </div>
        <div className="connector"></div>
        <div className="step">
          <div className="step-circle" style={{ background: '#ec4899' }}>3</div>
          <div className="step-label">Deploy</div>
        </div>
      </div>

      <div className="task-list">
        {loading ? (
          <p>Initializing pipeline engine...</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="task-item">
              <span style={{ fontWeight: 500 }}>{task.title}</span>
              <span className={`status-badge status-${task.status}`}>
                {task.status.replace('-', ' ')}
              </span>
            </div>
          ))
        )}
      </div>

      <footer style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
          Connected to GitHub Actions • Environment: Production
        </p>
      </footer>
    </div>
  )
}

export default App
