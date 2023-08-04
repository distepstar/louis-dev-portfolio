import { scroller } from "react-scroll";

export const scrollTo = (
  element: string,
  duration: number = 800,
  delay: number = 0
) => {
  scroller.scrollTo(element, {
    duration: duration,
    delay: delay,
    smooth: "easeInOutQuart",
  });
};
