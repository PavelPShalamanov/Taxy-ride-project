import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import GamePage from './pages/GamePage'
import LeaderboardPage from './pages/LeaderboardPage'
import AboutPage from './pages/AboutPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path='/leaderboard' element={<LeaderboardPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
