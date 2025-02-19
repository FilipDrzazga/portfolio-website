import {
  TITLE_TEXT_ARR,
  SUBTITLE_TEXT_ARR,
  PARAGRAPH_TEXT1_ARR,
  PARAGRAPH_TEXT2_ARR,
  PARAGRAPH_TEXT3_ARR,
  PARAGRAPH_TEXT4_ARR,
  TECH_STACK,
} from "../../../utils/constants";

const AboutMe = () => {
  return (
    <section className="container h-auto flex flex-col">
      <header className="w-full h-auto">
        <h1 className="flex flex-col font-oswald-m text-huge text-black leading-small tracking-tighter">
          {TITLE_TEXT_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </h1>
      </header>
      <div className="w-full h-auto mt-10">
        {SUBTITLE_TEXT_ARR.map((text, i) => (
          <p key={i} className="font-oswald-r text-small text-black leading-tiny">
            {text}
          </p>
        ))}
      </div>
      <div className="flex flex-col w-full h-auto mt-8">
        <p className="font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT1_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT2_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT3_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT4_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
      </div>
      <div className="w-full h-auto mt-10 leading-tiny">
        {TECH_STACK.map((text, i) => (
          <p key={i} className="font-oswald-m text-small text-black">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
