import logo from './logo.jpg';
import logo2 from './logo2.jpg';
import logo3 from './logo3.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='nato'>GROUP</h1>
      <header className="App-header">
        <body>
          <h2>
            <div className='div1'>
              <img src={logo} className="App-logo" alt="logo" />
            <p class="nato">
              Watcharapong Chaisangsri<br></br>
              You can call me not.<br></br>
              I'm backend from my group.
            </p>
            <a
              className="App-link"
              href="https://www.facebook.com/profile.php?id=100084777692987"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="button button2">Facebook </button>
            </a>
            </div>
            <br></br>
            <div className='div1'>
              <img src={logo2} className="App-logo" alt="logo2" />
            <p class="nato">
              Sunita Kanjanaprom<br></br>
              You can call me Aom.<br></br>
              I'm frontend from my group.
            </p>
            <a
              className="App-link"
              href="https://www.facebook.com/sunita.kanchanaprom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="button button2">Facebook </button>
            </a>
            </div>
            <br></br>
            <div className='div1'>
              <img src={logo3} className="App-logo" alt="logo3" />
            <p class="nato">
              Panpatsa Yaowakul<br></br>
              You can call me Ja<br></br>
              I'm frontend from my group
            </p>
            <a
              className="App-link"
              href="https://www.facebook.com/profile.php?id=100024675412497"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="button button2">Facebook </button>
            </a>
            </div>
          </h2>
        </body>
      </header>
      <footer>
        ""
      </footer>
    </div>
  );
}

export default App;
