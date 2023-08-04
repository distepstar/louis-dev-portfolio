"use client";

import React from "react";
import { useTrail, a } from "@react-spring/web";
import { IDropDownTrail } from "@/consts";

const DropDownTrail: React.FC<IDropDownTrail> = ({
  customClass,
  open,
  // height,
  delay,
  mass,
  tension,
  friction,
  children,
}) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: {
      mass: mass ? mass : 5,
      tension: tension ? tension : 2000,
      friction: friction ? friction : 200,
    },
    opacity: open ? 1 : 0,
    delay: delay ? delay : 100,
    y: open ? 20 : 0,
    // height: height ? height : 110,
    from: { opacity: 0, y: 0, height: 0 },
  });
  return (
    <div className={customClass && customClass}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div className={`flex justify-center place-items-center`}>
            {items[index]}
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

export default DropDownTrail;
