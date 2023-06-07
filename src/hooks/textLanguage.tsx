import { useSelector } from "react-redux";

const useText = (
  enText: any,
  hrText: any,
  slText: any,
  plText: any,
  czText: any
) => {
  const language = useSelector((state: any) => state.language);

  if (language == "en") {
    return enText;
  } else if (language == "hr") {
    return hrText;
  } else if (language == "sl") {
    return slText;
  } else if (language == "pl") {
    return plText;
  } else if (language == "cz") {
    return czText;
  }

  return enText;
};

export default useText;
