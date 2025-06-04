const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) throw new Error('API URL is required, are you missing your .env.local file?');

const baseURL = `${API_URL}/users`;

const getUserById = async id => {
  const res = await fetch(`${baseURL}/${id}`);
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

  const data = await res.json();

  return data;
};

const updateUser = async ({ id, formData }) => {
  const res = await fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    // headers: { 'Content-type': 'application/json' },
    // body: JSON.stringify(formData)
    body: formData
  });
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
  const data = await res.json();
  return data;
};

export { getUserById, updateUser };
