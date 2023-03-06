import React from "react";
import CozyReviews from "../common/CozyReviews";
import CozyStatsLarge from "../common/CozyStatsLarge";

const MiniCarousel = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <CozyStatsLarge intent="center" />
      <div className="mx-auto w-full max-w-xs sm:max-w-xl lg:max-w-3xl">
        <CozyReviews />
      </div>
    </div>
  );
};

export default MiniCarousel;
