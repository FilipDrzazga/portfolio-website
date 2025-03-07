import { useMediaQuery } from "react-responsive";
import {
  BIO_MOBILE_XS,
  BIO_MOBILE_M,
  BIO_MOBILE_LG,
  BIO_MOBILE_XL,
  BIO_TABLET_SM,
  BIO_TABLET_LG,
  BIO_SCREEN_XS,
  BIO_SCREEN_M,
  BIO_SCREEN_LG,
  CONTACT_MOBILE_XS,
  CONTACT_MOBILE_M,
  CONTACT_MOBILE_LG,
  CONTACT_MOBILE_XL,
  CONTACT_TABLET_SM,
  CONTACT_TABLET_LG,
  CONTACT_SCREEN_XS,
  CONTACT_SCREEN_M,
  CONTACT_SCREEN_LG,
} from "../images/images";

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
  if (isMobileXS) bioImageSrc = BIO_MOBILE_XS;
  else if (isMobileM) bioImageSrc = BIO_MOBILE_M;
  else if (isMobileLG) bioImageSrc = BIO_MOBILE_LG;
  else if (isMobileXL) bioImageSrc = BIO_MOBILE_XL;
  else if (isTabletSM) bioImageSrc = BIO_TABLET_SM;
  else if (isTabletLG) bioImageSrc = BIO_TABLET_LG;
  else if (isScreenXS) bioImageSrc = BIO_SCREEN_XS;
  else if (isScreenM) bioImageSrc = BIO_SCREEN_M;
  else if (isScreenLG) bioImageSrc = BIO_SCREEN_LG;
  else bioImageSrc = BIO_MOBILE_XL;

  let contactImageSrc;
  if (isMobileXS) contactImageSrc = CONTACT_MOBILE_XS;
  else if (isMobileM) contactImageSrc = CONTACT_MOBILE_M;
  else if (isMobileLG) contactImageSrc = CONTACT_MOBILE_LG;
  else if (isMobileXL) contactImageSrc = CONTACT_MOBILE_XL;
  else if (isTabletSM) contactImageSrc = CONTACT_TABLET_SM;
  else if (isTabletLG) contactImageSrc = CONTACT_TABLET_LG;
  else if (isScreenXS) contactImageSrc = CONTACT_SCREEN_XS;
  else if (isScreenM) contactImageSrc = CONTACT_SCREEN_M;
  else if (isScreenLG) contactImageSrc = CONTACT_SCREEN_LG;
  else contactImageSrc = CONTACT_MOBILE_XL;

  return { bioImageSrc, contactImageSrc };
};

export default useResponsiveImages;
