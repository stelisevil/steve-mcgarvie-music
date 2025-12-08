import classNames from "classnames";
import { RequestASongLink } from "../../components/RequestASongLink";
import { useSaxArrangementSongs } from "./useSaxArrangementSongs";

export const SaxArrangements = () => {
  const { loading, datoResponse: saxArrangementSongs } =
    useSaxArrangementSongs();

  if (loading) return null;

  return (
    <div className="w-full">
      <div
        className={classNames(
          "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
          `bg-[url(/hero-images/sax-arrangements.png)]`
        )}
      >
        Music
      </div>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">
          Sax quartet arrangements
        </div>
        <div className="px-8 text-xl">
          The saxophone quartets are for 2 altos, tenor and baritone unless
          stated otherwise. Most arrangements have sections for improvised
          solos. The cost for each arrangement is £20, and you will receive PDF
          copies of the full score and the individual parts.
        </div>
        <div className="px-8 text-xl">
          If there is a song you'd like to have arranged, go to the main Music
          page and fill in your details on the form, when a quote for the
          arrangement will be given soon after. * PLEASE NOTE: Samples coming
          soon *
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
