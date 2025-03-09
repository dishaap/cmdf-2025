import './App.css'
import { BaseCard } from './components/BaseCard'
import { NavigationBar } from './components/NavigationBar'
import { TripDashboard } from './pages/TripDashboard'

function App() {

  return (
    <>
    <div>
      <NavigationBar />
      <TripDashboard />
    </div>
      
    </>
  )
}

export default App
