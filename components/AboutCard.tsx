"use client";

import { DropDownTrail } from ".";
import { useInView } from "react-intersection-observer";
import {
  HeartIcon,
  CodeBracketIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/20/solid";
import {
  frontendAbout,
  gameDevelopmentAbout,
  IAboutCardInfo,
  systemTestAbout,
} from "@/consts";

const AboutCardInfo: React.FC<IAboutCardInfo> = ({
  icon,
  iconBackground,
  items,
}) => {
  const {
    title,
    content,
    sectionOneTitle,
    sectionOneContent,
    sectionTwoTitle,
    sectionTwoContent,
  } = items;

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center lg:space-y-20 space-y-12 py-16 px-6 lg:border-r-[1px] lg:border-b-[0px] border-b-[1px] border-slate-300">
      <div className="flex flex-col space-y-8 items-center text-center h-[40%] ">
        <span
          className={
            iconBackground
              ? iconBackground
              : "bg-gradient-to-b from-cyan-600 to-slate-300 shadow-blue-500" +
                ` flex rounded-full w-24 h-24 justify-center items-center shadow-md`
          }
        >
          {icon}
        </span>
        <span className="text-2xl text-black">{title}</span>
        <span className="text-xl text-slate-700">{content}</span>
      </div>
      <div className="flex flex-col space-y-8 items-center text-center h-[30%]">
        <div className="text-2xl text-cyan-800">{sectionOneTitle}</div>
        <div className="grid lg:grid-cols-3 lg:gap-4 grid-cols-1 gap-2">
          {sectionOneContent
            ? sectionOneContent.map((item: string, idx: number) => (
                <div
                  key={`frontend-language-${idx}`}
                  className="flex rounded-xl px-4 py-1 text-sm bg-cyan-800 shadow-lg justify-center items-center"
                >
                  {item}
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="flex flex-col space-y-8 items-center text-center h-[30%]">
        <div className="text-2xl text-cyan-800">{sectionTwoTitle}</div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2">
          {sectionTwoContent
            ? sectionTwoContent.map((item: string, idx: number) => (
                <div
                  key={`frontend-tools-libs-${idx}`}
                  className="flex rounded-xl px-4 py-1 text-sm bg-cyan-800 shadow-lg justify-center items-center"
                >
                  {item}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default function AboutCard({
  threshold,
  dimension: { width, height },
}: {
  threshold?: number;
  dimension: { width: number; height: number };
}) {
  const { ref, inView, entry } = useInView({
    threshold: threshold ? threshold : 0.2,
  });

  return (
    <div className="relative w-full lg:h-[70em] h-[210em] py-44" ref={ref}>
      <DropDownTrail customClass="w-full h-full" open={inView}>
        <div className="w-full h-full flex lg:flex-row flex-col justify-between items-start rounded-xl bg-white shadow-lg lg:[&>*:nth-child(3)]:border-r-0 [&>*:nth-child(3)]:border-b-0">
          <AboutCardInfo
            icon={
              <CodeBracketIcon
                className="stroke-black h-16 w-16"
                aria-hidden={true}
              />
            }
            items={frontendAbout}
          />
          <AboutCardInfo
            icon={
              <ClipboardDocumentCheckIcon
                className="stroke-black h-16 w-16"
                aria-hidden={true}
              />
            }
            items={systemTestAbout}
          />
          <AboutCardInfo
            icon={
              <HeartIcon
                className="stroke-black h-16 w-16"
                aria-hidden={true}
              />
            }
            items={gameDevelopmentAbout}
          />
        </div>
      </DropDownTrail>
    </div>
  );
}
