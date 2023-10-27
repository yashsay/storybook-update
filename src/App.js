import logo from './logo.svg';
import './App.css';
import { ReactSVG } from 'react-svg';

const Icon = ({ svgSource, width, height, fill, className }) => {
  return (
    <ReactSVG
      src={svgSource}
      beforeInjection={(svg) => {
        // You can modify the SVG before rendering if needed
        svg.classList.add(className);
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
        if (fill) {
          svg.setAttribute("fill", fill);
        }
      }}
      wrapper="span" // You can change the wrapper element
      className={className}
    />
  );
};

function App() {
  return (
    <div className="App">
      <Icon
        className={"amber"}
        width={12}
        height={12}
        fill={"white"}
        svgSource={"./stories/assets/info.svg"}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
