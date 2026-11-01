import { useEffect, useState } from "react";
import { getDato } from "../../services/getDato";

export type PasswordModel = "rehearsalPassword" | "christmasInHarmonyPassword";

type DatoResponseType = Partial<
  Record<
    PasswordModel,
    {
      password: string;
    }
  >
>;

const getQuery = (passwordModel: PasswordModel) => `{
  ${passwordModel} {
    password
  }
}`;

export const useGetPassword = (passwordModel: PasswordModel) => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState<string>();

  useEffect(() => {
    getDato<DatoResponseType>(getQuery(passwordModel)).then((res) => {
      setDatoResponse(res?.[passwordModel]?.password ?? "");
      setLoading(false);
    });
  }, [passwordModel]);

  return { loading, datoResponse };
};
