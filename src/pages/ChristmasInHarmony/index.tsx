import wellVersed from "/well-versed.png";
import { HeroBanner } from "../../components/HeroBanner";
import { TrackList } from "../../components/TrackList";

export const ChristmasInHarmony = () => (
  <div className="w-full">
    <HeroBanner imagePath="choir.png">
      <img src={wellVersed} alt="Well-Versed Community Choir Logo" />
    </HeroBanner>
    <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
      <div className="px-8 text-5xl font-semibold">Christmas in Harmony</div>
      <div className="px-8 text-xl">
        This is where members of Well-Versed Community Choir can find audio
        tracks for individual parts of the songs in our Christmas in Harmony
        concert.
        <br />
        There is also a download link for each track so you can listen offline.
      </div>
    </div>
    <TrackList bucket="christmas-in-harmony" />
  </div>
);
