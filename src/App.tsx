import "./App.css";
// eslint-disable-next-line import/extensions

console.log(process.env?.OMDB_API_KEY)
const App:React.FC<{}> =  () => (
  <div className="App">
    <header className="App-header">

      <p>
        Edit <code>src/App.js</code> and save to reload.
        {process.env?.OMDB_API_KEY}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
