// src/utils/fetchUserData.ts
export const fetchUserData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
