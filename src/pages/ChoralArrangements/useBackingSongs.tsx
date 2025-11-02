import { useEffect, useState } from "react";
import { getDato } from "../../services/getDato";

type SongType = {
  songTitle: string;
  artist: string;
  driveUrl: string;
  key: string;
  difficulty: string;
  id: string;
  position: string;
};

type DatoResponseType = {
  allBackingTrackSongs: SongType[];
};

const query = `{
  allBackingTrackSongs {
    songTitle
    artist
    driveUrl
    key
    difficulty
    id
    position
  }
}`;

export const useBackingSongs = () => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState<SongType[]>([]);

  useEffect(() => {
    getDato<DatoResponseType>(query).then((res) => {
      setDatoResponse(res?.allBackingTrackSongs ?? []);
      setLoading(false);
    });
  }, []);

  return { loading, datoResponse };
};
