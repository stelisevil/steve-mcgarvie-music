import { RequestASongLink } from "../../components/RequestASongLink";
import { usePopArrangementSongs } from "./usePopArrangementSongs";
import { HeroBanner } from "../../components/HeroBanner";

export const PopArrangements = () => {
  const { loading } = usePopArrangementSongs();

  if (loading) return null;

  return (
    <div className="w-full">
      <HeroBanner imagePath="pop-arrangements.png">Music</HeroBanner>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">Pop band arrangements</div>
        <div className="px-8 text-xl">
          All of the current arrangements available to purchase were originally
          written for Steve's former band The Soulutions based in the North East
          of England, who performed public and private gigs between 2005 and
          2012. All arrangements are written for Vocals (Male/Female,
          Lead/Backing), 3 horns (Trumpet, Alto/Tenor Sax, Trombone), Keyboard,
          Guitar, Bass Guitar and Drums, unless stated otherwise. Arrangements
          cost £30 for a PDF download of all parts plus a full score.
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
              <th className="px-4 py-6 font-semibold">Artist</th>
              <th className="px-4 py-6 font-semibold">Key</th>
              <th className="px-4 py-6 font-semibold">Difficulty</th>
              <th className="px-4 py-6 font-semibold">Listen + Buy</th>
            </tr>
          </thead>
          <tbody>
            {popArrangementSongs.map((song) => (
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
