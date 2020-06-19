import { useState, useEffect } from "react";
import API from '../helpers/api';

export function useApi(method, path, payload) {
  const [result, setResult] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await API.callApi(method, path, payload);
      setResult(data);
    }
    fetchData();
  }, [method, path, payload]);

  return result;
}
