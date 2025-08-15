import "./App.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// TODO
// React-query?
// React-hook-form?
// custom colours - dark-brand: 2c2c44, light-brand: d3d5ff
// fonts - already downloaded - look in the chrome downloads folder.

function App() {
  return (
    <div className="flex flex-col min-h-svh md:min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
