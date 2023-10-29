import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for='email'>Email : </label>
        <input type='email' name='email' value='' id='email'></input>
        <label for='password'>Password : </label>
        <input type='password' name='password' value='' id='password'></input>
        <button type='submit'>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </div>
    </div>
  );
}

export default App;
