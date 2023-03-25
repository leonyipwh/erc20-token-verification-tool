import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TokenVerification from './pages/TokenVerification';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={process.env.VITE_BASE_URL || '/'}
          element={<TokenVerification />}
        />
        <Route
          path="*"
          element={
            <Navigate
              to={process.env.VITE_BASE_URL || '/'}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
