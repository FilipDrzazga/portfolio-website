import { TECH_STACK } from "../../../../../utils/constants";

const TechStack = () => {
  return (
    <div className="flex flex-col w-full h-auto mt-8 mobile-sm-plus:mt-10 md:mt-14 lg:mt-8 custom-tablet:mt-14 xl:mt-10 laptop:mt-14">
      {TECH_STACK.map((text, i) => (
        <p
          key={i}
          className="font-oswald-r text-[0.93rem] text-black leading-4 mobile-sm:text-base mobile-sm-plus:text-lg mobile-sm-plus:leading-5 mobile-lg:text-xl md:text-2xl md:leading-6 tablet-md:text-3xl tablet-md:leading-7 custom-tablet:text-3xl custom-tablet:leading-7 lg:text-xl lg:leading-5 xl:text-2xl xl:leading-6"
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default TechStack;
