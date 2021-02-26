import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Login/>
      </header>
    </div>
  );
}

function Login(){
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginFn = ev => {
    const login = {username, password};
    console.log('login', login);
  };

  return(<>
      <input type="text" name="username" onChange={event => setUsername(event.target.value)} value={username} placeholder="Username" />
      <input type="password" name="password" onChange={event => setPassword(event.target.value)} value={password} placeholder="Password" />
      <div>
        <button type="submit" name="login" onClick={loginFn}>Login</button>
      </div>
  </>);
}

export default App;
