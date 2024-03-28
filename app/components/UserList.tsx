"use client";

import { trpc } from "@/server/client";

export default function UserList() {
  const users = trpc.users.get.useQuery();
  return (
      <div> Here the users:  {JSON.stringify(users.data)} </div>
  );
}
