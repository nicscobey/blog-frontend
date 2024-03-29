import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home';
import Blog from './pages/blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
