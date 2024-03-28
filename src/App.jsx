import { useCatFact } from "./hooks/useCatFact";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Cat FACTS</h1>
      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} />}
    </main>
  );
}

export default App;
