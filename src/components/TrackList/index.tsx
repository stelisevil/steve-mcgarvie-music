import { useEffect, useState } from "react";
import {
  getChoirTracks,
  type TrackFolder,
} from "../../services/getChoirTracks";
import { ChoirPlayer } from "../ChoirPlayer";

type TrackListProps = {
  bucket: string;
};

const getFileName = (url: string) => {
  const last = url.split("/").pop() ?? "";
  return last.split("?")[0];
};

const getFriendlyFileName = (fileName: string) =>
  fileName.replace(" AI.mp3", "").split(" ").slice(1).join(" ");

export const TrackList = ({ bucket }: TrackListProps) => {
  const [tracks, setTracks] = useState<TrackFolder[]>([]);

  useEffect(() => {
    getChoirTracks(bucket).then(setTracks);
  }, [bucket]);

  return (
    <div className="px-8">
      {tracks.map(({ folder, files }) => (
        <div key={folder} className="mb-12">
          <h3 className="mb-2 text-2xl font-bold text-left">
            {folder.replace(/-/g, " ")}
          </h3>

          {files.map((file) => {
            const fileName = getFileName(file.url);
            const friendlyFileName = getFriendlyFileName(fileName);

            return (
              <div key={file.name} className="mb-6">
                <h4 className="mb-2 text-lg font-medium text-left">
                  {friendlyFileName} -{" "}
                  <a
                    className="text-blue-500 visited:text-purple-700 hover:text-blue-700"
                    href={`${file.url}?download=${fileName}`}
                    download={fileName}
                  >
                    Download
                  </a>
                </h4>
                <ChoirPlayer url={file.url} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
