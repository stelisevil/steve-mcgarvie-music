import { RequestASongLink } from "../../components/RequestASongLink";
import { useSaxArrangementSongs } from "./useSaxArrangementSongs";
import { HeroBanner } from "../../components/HeroBanner";

export const SaxArrangements = () => {
  const { loading } = useSaxArrangementSongs();

  if (loading) return null;

  return (
    <div className="w-full">
      <HeroBanner imagePath="sax-arrangements.png">Music</HeroBanner>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">
          Sax quartet arrangements
        </div>
        <div className="px-8 text-xl">
          The saxophone quartets are for 2 altos, tenor and baritone unless
          stated otherwise. Most arrangements have sections for improvised
          solos. The cost for each arrangement is £30, and you will receive PDF
          copies of the full score and the individual parts.
        </div>
        <div className="px-8 text-xl">
          We also take requests! If you have a song you'd like arranging, click{" "}
          <a className="underline" href="/music">
            here
          </a>{" "}
          to make an enquiry.
        </div>
        {/* <table className="text-left border border-brand-light">
          <thead className="text-white border border-brand-light bg-brand-dark">
            <tr>
              <th className="px-4 py-6 font-semibold">Song title</th>
              <th className="px-4 py-6 font-semibold">Composer</th>
              <th className="px-4 py-6 font-semibold">Key</th>
              <th className="px-4 py-6 font-semibold">Difficulty</th>
              <th className="px-4 py-6 font-semibold">Listen + Buy</th>
            </tr>
          </thead>
          <tbody>
            {saxArrangementSongs.map((song) => (
              <tr key={song.id}>
                <td className="px-4 py-6">{song.songTitle}</td>
                <td className="px-4 py-6">{song.artist}</td>
                <td className="px-4 py-6">{song.key}</td>
                <td className="px-4 py-6">{song.difficulty}</td>
                <td className="px-4 py-6 underline">
                  <a download href={song.driveUrl}>
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <RequestASongLink />
      </div>
    </div>
  );
};
