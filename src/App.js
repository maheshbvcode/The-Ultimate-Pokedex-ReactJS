import React from "react";
import { AppRouter } from "./AppRouter";
import { PokeProvider } from "./context/PokeProvider";


function App() {
  return (
    <PokeProvider>
      <AppRouter/>
    </PokeProvider>
  );
}

export default App;
