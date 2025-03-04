// useResponsiveImages.js
import { useMediaQuery } from "react-responsive";

// Import your image files for each breakpoint
import BIO_MOBILE_SMALL from "../../../assets/images/bio_mobile_small.jpg";
import BIO_MOBILE_MD from "../../../assets/images/bio_mobile_md.jpg";
import BIO_MOBILE_LG from "../../../assets/images/bio_mobile_lg.jpg";
import BIO_TABLET_SM from "../../../assets/images/bio_tablet_sm.jpg";
import BIO_TABLET_LG from "../../../assets/images/bio_tablet_lg.jpg";
import BIO_DESKTOP_SM from "../../../assets/images/bio_desktop_sm.jpg";
import BIO_DESKTOP_LG from "../../../assets/images/bio_desktop_lg.jpg";

import CONTACT_MOBILE_SMALL from "../../../assets/images/contact_mobile_small.jpg";
import CONTACT_MOBILE_MD from "../../../assets/images/contact_mobile_md.jpg";
import CONTACT_MOBILE_LG from "../../../assets/images/contact_mobile_lg.jpg";
import CONTACT_TABLET_SM from "../../../assets/images/contact_tablet_sm.jpg";
import CONTACT_TABLET_LG from "../../../assets/images/contact_tablet_lg.jpg";
import CONTACT_DESKTOP_SM from "../../../assets/images/contact_desktop_sm.jpg";
import CONTACT_DESKTOP_LG from "../../../assets/images/contact_desktop_lg.jpg";

const useResponsiveImages = () => {
  // Define breakpoints using react-responsive
  const isMobileSmall = useMediaQuery({ maxWidth: 360 });
  const isMobileMD = useMediaQuery({ minWidth: 361, maxWidth: 480 });
  const isMobileLG = useMediaQuery({ minWidth: 481, maxWidth: 640 });
  const isTabletSM = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isTabletLG = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktopSM = useMediaQuery({ minWidth: 1025, maxWidth: 1440 });
  const isDesktopLG = useMediaQuery({ minWidth: 1441 });

  // Select the appropriate bio image source
  let bioImageSrc;
  if (isMobileSmall) bioImageSrc = BIO_MOBILE_SMALL;
  else if (isMobileMD) bioImageSrc = BIO_MOBILE_MD;
  else if (isMobileLG) bioImageSrc = BIO_MOBILE_LG;
  else if (isTabletSM) bioImageSrc = BIO_TABLET_SM;
  else if (isTabletLG) bioImageSrc = BIO_TABLET_LG;
  else if (isDesktopSM) bioImageSrc = BIO_DESKTOP_SM;
  else if (isDesktopLG) bioImageSrc = BIO_DESKTOP_LG;
  else bioImageSrc = BIO_MOBILE_MD; // fallback

  // Select the appropriate contact image source
  let contactImageSrc;
  if (isMobileSmall) contactImageSrc = CONTACT_MOBILE_SMALL;
  else if (isMobileMD) contactImageSrc = CONTACT_MOBILE_MD;
  else if (isMobileLG) contactImageSrc = CONTACT_MOBILE_LG;
  else if (isTabletSM) contactImageSrc = CONTACT_TABLET_SM;
  else if (isTabletLG) contactImageSrc = CONTACT_TABLET_LG;
  else if (isDesktopSM) contactImageSrc = CONTACT_DESKTOP_SM;
  else if (isDesktopLG) contactImageSrc = CONTACT_DESKTOP_LG;
  else contactImageSrc = CONTACT_MOBILE_MD; // fallback

  return { bioImageSrc, contactImageSrc };
};

export default useResponsiveImages;