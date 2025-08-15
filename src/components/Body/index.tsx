import { Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { Choir } from "../../pages/Choir";
import { Music } from "../../pages/Music";
import { About } from "../../pages/About";

export const Body = () => (
  <div className="flex justify-between flex-1 p-6 text-base font-normal text-black">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/choir" element={<Choir />} />
      <Route path="/music" element={<Music />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);
