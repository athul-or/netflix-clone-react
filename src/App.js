
import './App.css';
import Row from './components/Row';
import requests from './requests'
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isLargeRow={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>

      <Row title="Trending" fetchUrl={requests.fetchTrending}/>

      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>

      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>

      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>

      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>

      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
