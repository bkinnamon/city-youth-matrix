import { useState, useEffect } from "react";

const API_URL = 'https://cym.brettk.dev' // Change this for final production

export function useApi(path, method, payload) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + path, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        setResult(data);
        setLoading(false);
      });
    }, [path, method, payload]);

    return [result, loading];
  }
