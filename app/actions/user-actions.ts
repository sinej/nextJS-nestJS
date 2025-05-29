'use server'

export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: 'shin' },
    { id: 2, name: 'kim' },
    { id: 3, name: 'lee' },
  ];

  return DB.filter((user) => user.name.includes(name));
}