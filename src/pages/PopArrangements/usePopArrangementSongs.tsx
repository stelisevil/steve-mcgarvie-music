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
  allPopArrangementSongs: SongType[];
};

const query = `{
  allPopArrangementSongs {
    songTitle
    artist
    driveUrl
    key
    difficulty
    id
    position
  }
}`;

export const usePopArrangementSongs = () => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState<SongType[]>([]);

  useEffect(() => {
    getDato<DatoResponseType>(query).then((res) => {
      setDatoResponse(res?.allPopArrangementSongs ?? []);
      setLoading(false);
    });
  }, []);

  return { loading, datoResponse };
};
