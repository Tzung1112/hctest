import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/Header"
import Body from "./component/Body";

function App() {
  return (
      <div className="container">
          <div className="todo-lists">
              <h1>TODO LIST</h1>
              <Header></Header>
              <Body></Body>
          </div>
      </div>
  );
}

export default App;
