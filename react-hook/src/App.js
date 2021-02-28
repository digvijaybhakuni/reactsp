import './App.css';
import 'primeflex/primeflex.css';
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const loginRef = useRef();
  const headerRef = useRef();

  useLayoutEffect(() => {
    // componentDidMount / componentDidUpdate phase
    console.log('componentDidMount / componentDidUpdate phase');

    console.log(loginRef.current);
    console.log(headerRef.current);

  });

  return (<>
    <Header ref={headerRef}/>
    <div className="App">
      <button type="button" onClick={()=>{ setIsLogin(e => !e)}}>toggle</button>
      <div ref={loginRef}>
        {isLogin ? <span>Welcome</span> : <Login />}
      </div>
    </div>
  </>);
}

function Login(ref) {
  // this using state hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginFn = ev => {
    const login = { username, password };
    console.log('login', login);
  };

  useEffect(() => {

    //will run  mount of thos component
    document.title = 'Login To App'
    console.log('Login Compoent will Mount');
    return () => { 
      // will run unmount of this component 
      document.title = 'Welcome User';
      console.log('Login Compoent will unmount');

     };
  });

  return (<>
    <input type="text" name="username" onChange={event => setUsername(event.target.value)} value={username} placeholder="Username" />
    <input type="password" name="password" onChange={event => setPassword(event.target.value)} value={password} placeholder="Password" />
    <div>
      <button type="submit" name="login" onClick={loginFn}>Login</button>
    </div>
  </>);
}


function Header(props, ref) {
  const headerRef = useRef();
  return (<>
  <div ref={headerRef} className="header p-shadow-8">
    <nav>React HOOK</nav>
  </div>
  </>);
}

Header = forwardRef(Header);

export default App;
