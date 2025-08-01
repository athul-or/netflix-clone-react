import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import Login from './pages/login/login';
import LenisWrapper from './components/LenisWrapper'; // Add this import

function App() {
  return (
    <LenisWrapper> {/* Wrap everything with LenisWrapper */}
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar/>
          </header>

          <Routes>
            <Route path="/" element={
              <>
                <Banner fetchUrl={requests.fetchNetflixOriginals}/>
                <Row isLargeRow={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
                <Row title="Trending" fetchUrl={requests.fetchTrending}/>
                <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
                <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
                <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
                <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
                <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
              </>
            } />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </LenisWrapper>
  );
}

export default App;