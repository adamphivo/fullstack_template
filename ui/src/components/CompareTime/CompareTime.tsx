import { trpc } from "@/lib/trpc";
import React from "react";

const CompareTime: React.FC = () => {
  const { data: timeString } = trpc.getTime.useQuery();

  return (
    <div>
      <div>Date Server</div>
      <span>{timeString}</span>
      <div>Date Browser</div>
      <span>{new Date().toLocaleTimeString()}</span>
    </div>
  );
};

export default CompareTime;
