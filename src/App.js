import logo from './assets/img.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 classNAme="title">Upload your image</h1>
      <h2 className="instructions">File should be Jpeg, Png...</h2>
      <div className="drop-box">
        <div className="drop-image">
          <img class="drop-image_logo" src={logo}  alt="Drop box logo" />
        </div>
        <h3 className="drop-note">Drag and Drop your image here</h3>
      </div>
      <span className="small">Or</span>
      <button className="button">Choose a file</button>
    </div>
  );
}

export default App;
