"use strict";

import React from "react";
import { DropDownTrail } from ".";
import { IDropDownIntro, dropDownDefault } from "@/consts";
import { useInView } from "react-intersection-observer";

export default function DropDownIntro({
  title,
  customClass,
  threshold,
  config,
}: IDropDownIntro) {
  const { delay, mass, tension, friction } = config ? config : dropDownDefault;

  const { ref, inView, entry } = useInView({
    threshold: threshold ? threshold : 0.2,
  });
  return (
    <div ref={ref} className="w-full">
      <DropDownTrail
        customClass={customClass && customClass}
        open={inView}
        delay={delay}
        mass={mass}
        tension={tension}
        friction={friction}
      >
        <h1>{title}</h1>
      </DropDownTrail>
    </div>
  );
}
