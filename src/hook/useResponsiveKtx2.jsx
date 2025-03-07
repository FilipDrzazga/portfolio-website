import { useMediaQuery } from "react-responsive";

const useResponsiveImages = () => {
  const isMobileXS = useMediaQuery({ maxWidth: 320 });
  const isMobileM = useMediaQuery({ minWidth: 359, maxWidth: 375 });
  const isMobileLG = useMediaQuery({ minWidth: 376, maxWidth: 414 });
  const isMobileXL = useMediaQuery({ minWidth: 415, maxWidth: 480 });

  const isTabletSM = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isTabletLG = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });

  const isScreenXS = useMediaQuery({ minWidth: 1280, maxWidth: 1365 });
  const isScreenM = useMediaQuery({ minWidth: 1366, maxWidth: 1439 });
  const isScreenLG = useMediaQuery({ minWidth: 1440 });

  let bioImageSrc;
  if (isMobileXS) bioImageSrc = "../assets/images/bio_mobile_img_xs.ktx2";
  else if (isMobileM) bioImageSrc = "../assets/images/bio_mobile_img_m.ktx2";
  else if (isMobileLG) bioImageSrc = "../assets/images/bio_mobile_img_lg.ktx2";
  else if (isMobileXL) bioImageSrc = "../assets/images/bio_mobile_img_xl.ktx2";
  else if (isTabletSM) bioImageSrc = "../assets/images/bio_tablet_img_sm.ktx2";
  else if (isTabletLG) bioImageSrc = "../assets/images/bio_tablet_img_lg.ktx2";
  else if (isScreenXS) bioImageSrc = "../assets/images/bio_screen_img_xs.ktx2";
  else if (isScreenM) bioImageSrc = "../assets/images/bio_screen_img_m.ktx2";
  else if (isScreenLG) bioImageSrc = "../assets/images/bio_screen_img_lg.ktx2";
  else bioImageSrc = "../assets/images/bio_mobile_img_xl.ktx2";

  let contactImageSrc;
  if (isMobileXS) contactImageSrc = "../assets/images/contact_mobile_img_xs.ktx2";
  else if (isMobileM) contactImageSrc = "../assets/images/contact_mobile_img_m.ktx2";
  else if (isMobileLG) contactImageSrc = "../assets/images/contact_mobile_img_lg.ktx2";
  else if (isMobileXL) contactImageSrc = "../assets/images/contact_mobile_img_xl.ktx2";
  else if (isTabletSM) contactImageSrc = "../assets/images/contact_tablet_img_sm.ktx2";
  else if (isTabletLG) contactImageSrc = "../assets/images/contact_tablet_img_lg.ktx2";
  else if (isScreenXS) contactImageSrc = "../assets/images/contact_screen_img_xs.ktx2";
  else if (isScreenM) contactImageSrc = "../assets/images/contact_screen_img_m.ktx2";
  else if (isScreenLG) contactImageSrc = "../assets/images/contact_screen_img_lg.ktx2";
  else contactImageSrc = "../assets/images/contact_mobile_img_xl.ktx2";

  return { bioImageSrc, contactImageSrc };
};

export default useResponsiveImages;
