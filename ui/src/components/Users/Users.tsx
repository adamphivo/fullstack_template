import { trpc } from "@/lib/trpc";
import React from "react";

const Users: React.FC = () => {
  const { data: users } = trpc.getUsers.useQuery();

  return <div>{users?.length}</div>;
};

export default Users;
