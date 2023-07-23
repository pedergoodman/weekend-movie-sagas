import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../../MovieDetails/MovieDetails';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
        <Route path="/" exact>
          <MovieList />

        </Route>

        {/* Details page */}
        <Route path="/details/:id/:title">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
