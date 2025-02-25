import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Dev from './pages/TicTacToe';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;