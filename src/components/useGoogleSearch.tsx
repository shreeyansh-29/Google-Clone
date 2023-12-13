import React, {useEffect, useState} from "react";

const useGoogleSearch = (term: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}`,
        {signal}
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch((err: any) => {
          controller.abort();
          console.error(err);
        });
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [term]);

  return {data};
};

export default useGoogleSearch;
