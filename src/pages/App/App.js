import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { LandingPage } from '../LandingPage/LandingPage';
import { HermanosPage } from '../HermanosPage/HermanosPage';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage /> } />
          <Route path='/hermanos' element={<HermanosPage />} />
        </Routes>
      </>
    </main>
  );
}
