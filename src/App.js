import "./App.css";
import { cards } from "./cards";
import { Card } from "./card";

function App() {
  return (
    <div className="App">
      {cards.map((card) => {
        return (
          <div className="cardDiv">
            <Card {...card} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
