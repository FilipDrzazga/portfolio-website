import { BIO_MOBILE, BIO_TABLET, BIO_DESKTOP } from "../../../assets/images/images";

const Bio = () => {
  return (
    <section className="container flex flex-col justify-end">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <picture className="w-full h-full">
          <source srcSet={BIO_MOBILE} type="image/webp" media="(max-width: 480px)" />
          <source srcSet={BIO_TABLET} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={BIO_DESKTOP} type="image/webp" media="(min-width: 1200px)" />
          <img className="w-full h-full object-cover" src={BIO_MOBILE} alt="A portrait of me" />
        </picture>
      </div> */}
      <div className="relative flex justify-between w-full h-auto">
        <div>
          <span className="font-oswald-r text-tiny text-black">51.6611°N</span>
        </div>
        <div>
          <span className="font-oswald-r text-tiny text-black">WATFORD</span>
        </div>
        <div>
          <span className="font-oswald-r text-tiny text-black">0.3970°W</span>
        </div>
      </div>
    </section>
  );
};

export default Bio;
