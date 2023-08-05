import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import RecipesPage from './pages/RecipesPage/RecipesPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
