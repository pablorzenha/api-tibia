import "./App.css";
import CreaturesProvider from "./contexts/creatures";

import RoutesMain from "./routes";

function App() {
  return (
    <CreaturesProvider>
      <RoutesMain />
    </CreaturesProvider>
  );
}

export default App;
