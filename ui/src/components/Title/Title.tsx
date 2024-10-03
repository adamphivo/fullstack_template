import { trpc } from "@/lib/trpc";
import React from "react";

const Title: React.FC = () => {
  const { data } = trpc.getUser.useQuery();

  return <div>{data?.length}</div>;
};

export default Title;
