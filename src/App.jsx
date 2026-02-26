import { Routes, Route, Link } from 'react-router'
import { Home } from './pages/Home'
import { About } from './pages/About'

export const App = () => {
  return (
    <div>
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
