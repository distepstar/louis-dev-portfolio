"use client";

import React from "react";
import { useTrail, a } from "@react-spring/web";
import { scrollTo } from "../utils";
import { useInView } from "react-intersection-observer";

const TitleTrail: React.FC<{
  customClass?: string;
  open: boolean;
  children: React.ReactNode;
}> = ({ customClass, open, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 500,
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={customClass} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const DescriptionTrail: React.FC<{
  customClass?: string;
  delay?: number;
  open: boolean;
  children: React.ReactNode;
}> = ({ customClass, open, children, delay }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: {
      mass: 1,
      tension: 1000,
      friction: 200,
    },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, y: 20, height: 0 },
    delay: delay ? delay : 1000,
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={customClass} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
export default function Hero() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="common__container_class h-[60em]" ref={ref}>
      <div className="flex flex-col lg:space-y-16 space-y-8">
        <div className="w-full flex flex-col justify-center items-start space-y-2">
          <TitleTrail
            customClass="font-semibold lg:text-[4em] text-[1.8em] "
            open={inView}
          >
            <span>with programming and creativity,</span>
          </TitleTrail>
          <TitleTrail
            customClass="font-semibold lg:text-[4em] text-[1.8em] "
            open={inView}
          >
            <span>we can build</span>
          </TitleTrail>
          <TitleTrail
            customClass="font-semibold lg:text-[4em] text-[1.8em] "
            open={inView}
          >
            <span>
              something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                incredible
              </span>
            </span>
          </TitleTrail>
          <TitleTrail
            customClass="font-semibold lg:text-[4em] text-[1.8em] "
            open={inView}
          >
            <span>to change the world.</span>
          </TitleTrail>
        </div>

        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-16 justify-between place-items-center w-full">
          <DescriptionTrail
            customClass="lg:text-lg text-sm lg:text-left text-center lg:w-[40em] w-full "
            open={inView}
          >
            <span className="">
              Louis Lei, A frontend developer located in Toronto with 2 years of
              experience. Experience in Web Application Development, Continuous
              and Behavior Driven Testing, and Game Development.
            </span>
          </DescriptionTrail>

          <DescriptionTrail customClass="" open={inView}>
            <button
              type="button"
              className="rounded-md text-2xl font-semibold w-[10em] h-16 shadow-lg shadow-cyan-900 bg-cyan-700 hover:bg-cyan-600 duration-200 hover:shadow-cyan-600"
              onClick={() => scrollTo("contact")}
            >
              CONTACT ME
            </button>
          </DescriptionTrail>
        </div>
      </div>
    </div>
  );
}
