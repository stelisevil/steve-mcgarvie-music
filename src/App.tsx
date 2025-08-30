import "./App.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// TODO
// React-query?
// React-hook-form?

function App() {
  return (
    <div className="flex flex-col min-h-svh md:min-h-screen font-[KantumruyPro]">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
