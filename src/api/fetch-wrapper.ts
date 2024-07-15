interface FetchError extends Error {
  status?: number;
  data?: any;
}

const fetchWrapper = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, { credentials: 'include', ...options });
  if (!res.ok) {
    const errorData = await res.json();
    const error: FetchError = new Error('Fetch failed') as FetchError;
    error.status = res.status;
    error.data = errorData;
    throw error;
  }
  return (await res.json()) as Promise<T>;
};

export default fetchWrapper;
