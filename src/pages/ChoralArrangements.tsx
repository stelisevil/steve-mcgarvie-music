import classNames from "classnames";
import { RequestASongLink } from "../components/RequestASongLink";

export const ChoralArrangements = () => (
  <div className="w-full">
    <div
      className={classNames(
        "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
        `bg-[url(/hero-images/choral-arrangements.png)]`
      )}
    >
      Music
    </div>
    <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
      <div className="px-8 text-5xl font-semibold">Choral arrangements</div>
      <div className="px-8 text-xl">
        Most of the current arrangements available to purchase were originally
        written for Well-Versed Community Choir. All arrangements are SATB
        unless otherwise stated. Arrangements cost £30 for a PDF download of the
        full score (unless stated otherwise). You will then be able to print as
        many copies as necessary for your group for no extra charge. In
        addition, an MP3 backing track with all non-a cappella arrangements is
        provided for rehearsal purposes.
      </div>
      <div className="px-8 text-xl">
        If there is a song you'd like to have arranged, go to the main Music
        page and fill in your details on the form, when a quote for the
        arrangement will be given soon after. * PLEASE NOTE: Samples coming soon
        *
      </div>
      <div className="px-8 text-5xl font-semibold">A capella songs</div>
      <table className="text-left border border-brand-light">
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
          <tr>
            <td className="px-4 py-6">Title here</td>
            <td className="px-4 py-6">Artist here</td>
            <td className="px-4 py-6">Em</td>
            <td className="px-4 py-6">Hard</td>
            <td className="px-4 py-6 underline">Link</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Title here</td>
            <td className="px-4 py-6">Artist here</td>
            <td className="px-4 py-6">Em</td>
            <td className="px-4 py-6">Hard</td>
            <td className="px-4 py-6 underline">Link</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Title here</td>
            <td className="px-4 py-6">Artist here</td>
            <td className="px-4 py-6">Em</td>
            <td className="px-4 py-6">Hard</td>
            <td className="px-4 py-6 underline">Link</td>
          </tr>
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
            <th className="px-4 py-6 font-semibold">Listen + Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-6">Title here</td>
            <td className="px-4 py-6">Artist here</td>
            <td className="px-4 py-6">Em</td>
            <td className="px-4 py-6">Hard</td>
            <td className="px-4 py-6 underline">Link</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Title here</td>
            <td className="px-4 py-6">Artist here</td>
            <td className="px-4 py-6">Em</td>
            <td className="px-4 py-6">Hard</td>
            <td className="px-4 py-6 underline">Link</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Title here</td>
            <td className="px-4 py-6">Artist here</td>
            <td className="px-4 py-6">Em</td>
            <td className="px-4 py-6">Hard</td>
            <td className="px-4 py-6 underline">Link</td>
          </tr>
        </tbody>
      </table>
      <RequestASongLink />
    </div>
  </div>
);
