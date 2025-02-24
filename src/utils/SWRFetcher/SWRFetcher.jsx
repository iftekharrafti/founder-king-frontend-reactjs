export const authFetcher = async (url, token) => {
    const res = await fetch(url, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.json();
  };
  
  
  
  
  // another fetcher for data fetching 
  export const fetcher = (...args) => fetch(...args).then((res) => res.json());
  