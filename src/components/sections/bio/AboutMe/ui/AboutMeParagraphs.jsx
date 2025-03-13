import { PARAGRAPH_TEXT1_ARR, PARAGRAPH_TEXT2_ARR, PARAGRAPH_TEXT3_ARR, PARAGRAPH_TEXT4_ARR } from "../../../../../utils/constants";

const AboutMeParagraphs = () => {
  const paragraphs = [PARAGRAPH_TEXT1_ARR, PARAGRAPH_TEXT2_ARR, PARAGRAPH_TEXT3_ARR, PARAGRAPH_TEXT4_ARR];

  return (
    <div className="text-justify flex flex-col w-full h-auto mt-6 mobile-sm:w-[90%] mobile-md:w-4/5 mobile-lg:mt-8 mobile-lg:w-[90%] md:w-2/4 tablet-md:mt-10 tablet-md:w-2/4 custom-tablet:w-[43%] custom-tablet:mt-10 lg:mt-6 lg:w-[75%] xl:w-[67%] laptop:w-[60%] laptop:mt-8 2xl:w-[60%] screen-sm:w-[55%] screen-md:w-[50%]">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-lg:text-sm xl:text-sm">
          {paragraph.map((text, j) => (
            <span key={j}>{text}</span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default AboutMeParagraphs;
