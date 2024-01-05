import { useMediaQuery } from "react-responsive";

const useCardHeight = () => {
  const sm = useMediaQuery({ maxWidth: 767 });
  const md = useMediaQuery({ maxWidth: 991 });
  const lg = useMediaQuery({ maxWidth: 1199 });
  const xl = useMediaQuery({ maxWidth: 1399 });

  if (sm) {
    return { minHeight: "fit-content" };
  } else if (md) {
    return { minHeight: "19rem" };
  } else if (lg) {
    return { minHeight: "16rem" };
  } else if (xl) {
    return { minHeight: "29rem" };
  } else {
    return { minHeight: "26rem" };
  }
};

export default useCardHeight;
