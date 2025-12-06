import classNames from "classnames";
import wellVersed from "/well-versed.png";
import { useEffect, useState } from "react";
import {
  getChoirTracks,
  type TrackFolder,
} from "../../services/getChoirTracks";
import { ChoirPlayer } from "./ChoirPlayer";

export const Rehearsal = () => {
  const [tracks, setTracks] = useState<TrackFolder[]>([]);

  useEffect(() => {
    getChoirTracks().then(setTracks);
  }, []);

  return (
    <div className="w-full">
      <div
        className={classNames(
          "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
          `bg-[url(/hero-images/choir.png)]`
        )}
      >
        <img src={wellVersed} alt="Well-Versed Community Choir Logo" />
      </div>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">Rehearsal Space</div>
        <div className="px-8 text-xl">
          This is where members of Well-Versed Community Choir can look for
          resources, including audio tracks for individual parts of songs we are
          currently rehearsing.
        </div>
      </div>
      {tracks.map(({ folder, files }) => (
        <div key={folder} style={{ marginBottom: "3rem" }}>
          <h2>{folder.replace(/-/g, " ")}</h2>

          {files.map((file) => (
            <div key={file.name} style={{ marginBottom: "1.5rem" }}>
              <h4>{file.name.replace(".mp3", "")}</h4>
              <ChoirPlayer url={file.url} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
