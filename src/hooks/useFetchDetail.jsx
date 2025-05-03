import { useEffect, useState } from 'react';

const useFetchDetail = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.themoviedb.org/3${endpoint}?language=en-US`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGI1MTg4ZmVlZTEwZjE4MTcxZWJlMWY3NzZmYzM4NCIsIm5iZiI6MTc0NTkzNzU4Ny45NTEsInN1YiI6IjY4MTBlNGIzMTkyOTJmMDk4ODgwY2QyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2axOfBBqe8Twhm0LiYBh5ujqur5UdPnV8YT_DNlc94',
        },
      });

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchDetail;
