import { Route, Routes } from "react-router";
import {
  About,
  Bands,
  Choir,
  ChoralArrangements,
  Home,
  Music,
  PopArrangements,
  Rehearsal,
  SaxArrangements,
  Tuition,
} from "../../pages";

export const Body = () => (
  <div className="flex justify-between flex-1 text-base font-normal text-black">
    <Routes>
      <Route index element={<Home />} />
      <Route path="/choir/rehearsal" element={<Rehearsal />} />
      <Route path="/choir" element={<Choir />} />
      <Route
        path="/music/choral-arrangements"
        element={<ChoralArrangements />}
      />
      <Route path="/music/pop-arrangements" element={<PopArrangements />} />
      <Route path="/music/sax-arrangements" element={<SaxArrangements />} />
      <Route path="/music" element={<Music />} />
      <Route path="/about/bands" element={<Bands />} />
      <Route path="/about/tuition" element={<Tuition />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);
