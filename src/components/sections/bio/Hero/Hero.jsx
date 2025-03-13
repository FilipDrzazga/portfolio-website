import { useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { AvailabilityText, AvailabilityIndicator, CoordinatesDisplay } from "./ui";

const Hero = () => {
  const { scrollY } = useScroll();
  const isScreen = useMediaQuery({ minWidth: 1024 });
  const isCustomRange = useMediaQuery({ width: 1024, height: 1366 });
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 110], [0, -15]);

  return (
    <section className="wrapper flex flex-col justify-end custom-tablet:w-full lg:w-[calc(100vw-45vw)] laptop:items-center">
      {isScreen && !isCustomRange && (
        <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center gap-1">
          <AvailabilityText />
          <AvailabilityIndicator />
        </div>
      )}
      <CoordinatesDisplay opacity={opacity} y={y} />
    </section>
  );
};

export default Hero;
