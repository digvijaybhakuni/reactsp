import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import { Blog } from './Blog';
import { post } from 'jquery';
import { Post } from './Post';

function App() {
  const sampleStr = "==="
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Headers />
        </header>
        <main role="main" class="flex-shrink-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/post/*" component={Post} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


const noop = () => {};

const Headers = () => {
  return <div className="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/blog">theBlog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" 
              href="#" role="button" data-toggle="dropdown" 
              aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
};

const Footer = () => {
  return <footer class="footer mt-auto py-3">
    <div class="container">
      <span class="text-muted">Place sticky footer content here.</span>
    </div>
  </footer>
}

const Home = () => {
  return <div className="container">
    <Jumbotron />
    <Blog/>
  </div>
}


const About = () => {
  return <div className="container about">
    <h1>This About</h1>
  </div>
}

const Jumbotron = () => {
  return <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
}

export default App;
