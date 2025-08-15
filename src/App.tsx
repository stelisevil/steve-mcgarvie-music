import "./App.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// TODO
// Routing
// React-query?
// React-hook-form?
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
