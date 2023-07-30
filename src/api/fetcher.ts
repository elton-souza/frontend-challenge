import axios from "axios";

const fetcher = async <T>(url: string) => {
  const { data } = await axios.get<T>(url);

  return { data };
};

export default fetcher;
