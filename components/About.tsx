"use client";

import React from "react";
import { AboutCard, DropDownIntro } from ".";
import useWindowDimensions from "@/hooks/dimension";

export default function About() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="common__container_class">
      <div className="w-full flex flex-col justify-start place-items-center sm:space-y-12 space-y-6">
        <DropDownIntro
          customClass="w-full flex justify-center items-center font-semibold sm:text-[6em] text-[3em] h-[8em] text-center"
          title="Hi! I'm Louis!"
          threshold={0.3}
          config={{
            mass: 2,
          }}
        />
        <DropDownIntro
          customClass="w-full flex justify-center items-center font-semibold sm:text-[6em] text-[3em] h-[8em] text-center"
          title="It's good to see you here."
          threshold={0.3}
          config={{
            mass: 2,
          }}
        />
        <DropDownIntro
          customClass="w-full flex justify-center items-center font-semibold sm:text-[6em] text-[3em] h-[8em] text-center"
          title="Let me tell you more about myself."
          threshold={0.3}
          config={{
            mass: 2,
          }}
        />
        <AboutCard
          threshold={width > 640 ? 0.3 : 0.2}
          dimension={{ width, height }}
        />
      </div>
    </div>
  );
}
