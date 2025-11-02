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
  allSaxArrangementSongs: SongType[];
};

const query = `{
  allSaxArrangementSongs {
    songTitle
    artist
    driveUrl
    key
    difficulty
    id
    position
  }
}`;

export const useSaxArrangementSongs = () => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState<SongType[]>([]);

  useEffect(() => {
    getDato<DatoResponseType>(query).then((res) => {
      setDatoResponse(res?.allSaxArrangementSongs ?? []);
      setLoading(false);
    });
  }, []);

  return { loading, datoResponse };
};
