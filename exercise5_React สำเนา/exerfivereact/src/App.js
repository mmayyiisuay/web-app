import './App.css';
import Cardbox from './componants/cardbox.jsx';
import Data from "./data.json";

function App() {
  return (
    <div className="App">
      <h1>โหวตอาหาร</h1>
      {
        Data.map(data => {
          return (
            <Cardbox 
                topic={data.topic}
                name={data.name}
                img={data.img}
                content={data.content}
            />
          )
        })
      }
    </div>
  );
}

export default App;
