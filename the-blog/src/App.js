import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Blog } from './Blog';
import { Post } from './Post';
import { About } from './About';
import { Author } from './Author';
import { Login } from './Login';
import { Loading } from './Loading';
import { LoginContext, VisitorIdContext } from './Context';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { LoginProvider } from './Provider';


function App() {
 
  const [visitorId, setVisitorId] = useState();

  useEffect(() => {
    const fpPromise = FingerprintJS.load();
    (async () => {
      const fp = await fpPromise;
      const result = await fp.get();
      const visitorId = result.visitorId;
      setVisitorId(visitorId);
      console.log('result', result);
    })();
  }, [setVisitorId]);

  return (
    <div className="App">
      <VisitorIdContext.Provider value={{ visitorId, setVisitorId }}>
        <BrowserRouter>
          ̥<LoginProvider>
            <header>
              <Headers />
            </header>
            <main role="main" className="flex-shrink-0">
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/post/:postId" component={Post} />
                  <Route exact path="/author/:authorId" component={Author} />
                  <Route path="/about" component={About} />
                </Switch>
              </Suspense>
            </main>
          </LoginProvider>
        </BrowserRouter>
        <Footer />
      </VisitorIdContext.Provider>
    </div>
  );
}


const noop = () => { };

const Headers = () => {
  const { isLogin, username } = useContext(LoginContext);
  return <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/blog">theBlog</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown"
              href={noop} role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href={noop}>Action</a>
              <a className="dropdown-item" href={noop}>Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href={noop}>Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href={noop} nooptabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <span>
          {!isLogin ?
            <Link to="/login">Login</Link> : <span>{username}</span>
          }
        </span>
      </div>
    </nav>
  </div>
};

const Footer = () => {
  const { visitorId } = useContext(VisitorIdContext);
  return <footer className="footer mt-auto py-3">
    <div className="container">
      <span className="text-muted">Place sticky footer content here.</span>
      <span>VisitorId: {visitorId}</span>
    </div>
  </footer>
}

const Home = () => {
  return <div className="container">
    <Jumbotron />
    <Blog />
  </div>
}



const Jumbotron = () => {
  return <div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
}

export default App;
