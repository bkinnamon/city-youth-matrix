import { useState, useEffect } from "react";
import API from '../helpers/api';

export function useApi(method, path, payload) {
  const [result, setResult] = useState();
  const body = JSON.stringify(payload);

  useEffect(() => {
    async function fetchData() {
      const data = await API.callApi(method, path, body);
      setResult(data);
    }
    fetchData();
  }, [method, path, body]);

  return result;
}
