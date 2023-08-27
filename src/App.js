import logo from './logo.svg';
import './App.css';
import button from './components/Button';

function App() {
  return (
    <div className="App">
    <h1>My Portfolio Page</h1>
    <p>I am Edor Godwin Etornam. I am a passionate Frontend Developer with 3 years experience in mobile responsive website and web application developement. I hold BSc. Degree in Telecommunication Engineering.</p>


    <h2>Skills</h2>
    <ol>
    <li>Html</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Reat</li>
    </ol>
    <h2>Education</h2>
    <ol>
    <li>BSc Telecommunication Engineering - Knust</li>
    </ol>
    <div>
    {button("Login")}
    {button("Signin")}
    </div>
    
    </div>
  );
}

export default App;
