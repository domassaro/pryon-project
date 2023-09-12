export const fetchLocation = async () => {
  const api = await fetch("/api/iss");
  return api.json();
};
