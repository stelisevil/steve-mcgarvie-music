import { RequestASongLink } from "../../components/RequestASongLink";
import { useACapellaSongs } from "./useACapellaSongs";
import { useBackingSongs } from "./useBackingSongs";
import { HeroBanner } from "../../components/HeroBanner";

export const ChoralArrangements = () => {
  const { datoResponse: aCapellaSongs, loading: aCapellaLoading } =
    useACapellaSongs();

  const { datoResponse: backingSongs, loading: backingLoading } =
    useBackingSongs();

  if (aCapellaLoading || backingLoading) return null;

  return (
    <div className="w-full">
      <HeroBanner imagePath="music.jpg">Music</HeroBanner>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">Choral arrangements</div>
        <div className="px-8 text-xl">
          Most of the current arrangements available to purchase were originally
          written for Well-Versed Community Choir. All arrangements are SATB
          unless otherwise stated. Arrangements cost £30 (unless otherwise
          stated) for a PDF download of the full score. You will then be able to
          print as many copies as necessary for your group for no extra charge.
          In addition, an MP3 backing track with all non-a cappella arrangements
          is provided for rehearsal purposes.
        </div>
        <div className="px-8 text-xl">
          We also take requests! If you have a song you'd like arranging, click{" "}
          <a className="underline" href="/music">
            here
          </a>{" "}
          to make an enquiry.
        </div>
        <div className="px-8 text-5xl font-semibold">A capella songs</div>
        <table className="text-left border border-brand-light">
          <thead className="text-white border border-brand-light bg-brand-dark">
            <tr>
              <th className="px-4 py-6 font-semibold">Song title</th>
              <th className="px-4 py-6 font-semibold">Artist</th>
              <th className="px-4 py-6 font-semibold">Key</th>
              <th className="px-4 py-6 font-semibold">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {aCapellaSongs.map((song) => (
              <tr key={song.id}>
                <td className="px-4 py-6">{song.songTitle}</td>
                <td className="px-4 py-6">{song.artist}</td>
                <td className="px-4 py-6">{song.key}</td>
                <td className="px-4 py-6">{song.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-8 text-5xl font-semibold">
          Songs with backing tracks
        </div>

        <table className="text-left border border-brand-light">
          <thead className="text-white border border-brand-light bg-brand-dark">
            <tr>
              <th className="px-4 py-6 font-semibold">Song title</th>
              <th className="px-4 py-6 font-semibold">Artist</th>
              <th className="px-4 py-6 font-semibold">Key</th>
              <th className="px-4 py-6 font-semibold">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {backingSongs.map((song) => (
              <tr key={song.id}>
                <td className="px-4 py-6">{song.songTitle}</td>
                <td className="px-4 py-6">{song.artist}</td>
                <td className="px-4 py-6">{song.key}</td>
                <td className="px-4 py-6">{song.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <RequestASongLink />
      </div>
    </div>
  );
};
