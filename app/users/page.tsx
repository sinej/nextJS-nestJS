"use client"

import { useEffect, useState } from 'react';
import { searchUsers } from "@/app/actions/user-actions";
import { useSearchParams } from "next/navigation";

export default function UserPage() {
  const [users, setUsers] = useState([]);

  const searchParams = useSearchParams();
  const name = searchParams.get('name') as string;

  useEffect(() => {
    searchUsers(name).then((data: any) => setUsers(data));
  }, []);

  return (
    <main>

      <h1>users</h1>

      {users.map((user: { id: number, name: string }) =>
        <p key={user.id}>{user.name}</p>
      )}

    </main>

  )

}