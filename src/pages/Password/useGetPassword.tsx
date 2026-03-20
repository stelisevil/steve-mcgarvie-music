import { useEffect, useState } from "react";
import { getDato } from "../../services/getDato";

type DatoResponseType = {
  rehearsalPassword: {
    password: string;
  };
};

const query = `{
  rehearsalPassword {
    password
  }
}`;

export const useGetPassword = () => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState<string>();

  useEffect(() => {
    getDato<DatoResponseType>(query).then((res) => {
      setDatoResponse(res?.rehearsalPassword?.password ?? "");
      setLoading(false);
    });
  }, []);

  return { loading, datoResponse };
};
