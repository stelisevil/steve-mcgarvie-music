import wellVersed from "/well-versed.png";
import { useEffect, useState } from "react";
import {
  getChoirTracks,
  type TrackFolder,
} from "../../services/getChoirTracks";
import { ChoirPlayer } from "./ChoirPlayer";
import { HeroBanner } from "../../components/HeroBanner";

export const Rehearsal = () => {
  const [tracks, setTracks] = useState<TrackFolder[]>([]);

  useEffect(() => {
    getChoirTracks().then(setTracks);
  }, []);

  return (
    <div className="w-full">
      <HeroBanner imagePath="choir.png">
        <img src={wellVersed} alt="Well-Versed Community Choir Logo" />
      </HeroBanner>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">Rehearsal Space</div>
        <div className="px-8 text-xl">
          This is where members of Well-Versed Community Choir can look for
          resources, including audio tracks for individual parts of songs we are
          currently rehearsing.
        </div>
      </div>
      <div className="px-8">
        {tracks.map(({ folder, files }) => (
          <div key={folder} className="mb-12">
            <h3 className="mb-2 text-2xl font-bold text-left">
              {folder.replace(/-/g, " ")}
            </h3>

            {files.map((file) => (
              <div key={file.name} className="mb-6">
                <h4 className="mb-2 text-lg font-medium text-left">
                  {file.name.replace(".mp3", "")}
                </h4>
                <ChoirPlayer url={file.url} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
