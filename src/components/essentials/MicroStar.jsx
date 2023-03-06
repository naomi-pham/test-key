import React from "react";
import CozyStatsSmall from "../common/CozyStatsSmall";

const MicroStar = () => {
  return (
    <div className="flex items-center gap-2 py-4">
      <CozyStatsSmall />
      <a href="/" className="font-primary text-brand">
        Cozy Cot
      </a>
    </div>
  );
};

export default MicroStar;
