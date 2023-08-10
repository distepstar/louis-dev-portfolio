"use client";

import { IProjectCard } from "@/consts";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function ProjectCard({
  title,
  titleColor,
  description,
  imageURL,
  link,
  posX,
  posY,
}: IProjectCard) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={
        "relative lg:w-[30em] w-[26em] h-[20em] rounded-lg hover:shadow-lg flex flex-wrap justify-center items-center group cursor-pointer overflow-hidden"
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className="absolute w-full h-full rounded-lg transition-all transform group-hover:scale-105 ease-in-out duration-200"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundPositionX: posX ? posX : 0,
          backgroundPositionY: posY ? posY : 0,
        }}
      ></div>

      <h1
        className={
          "w-full h-full flex justify-center absolute items-center rounded-lg lg:text-3xl text-2xl lg:group-hover:text-4xl ease-in-out duration-200 transition-all font-semibold " +
          (titleColor ? titleColor : "bg-slate-900/80")
        }
      >
        {title}
      </h1>

      <Transition
        show={isHover}
        className="w-full h-full z-20"
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={
            "flex flex-col w-full h-full rounded-lg justify-center items-center space-y-12 bg-slate-950"
          }
        >
          <h1 className="text-[1.5em] font-semibold px-6">{description}</h1>
          <Link
            className={
              "flex justify-center items-center w-[12em] h-[50px] rounded-md text-xl font-semibold transition duration-100 bg-cyan-600 shadow-md shadow-cyan-600 hover:shadow-lg hover:bg-cyan-400 hover:shadow-cyan-400"
            }
            href={link ? link : "https://github.com/distepstar"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit
            <ChevronRightIcon className="h-8 w-8" aria-hidden={true} />
          </Link>
        </div>
      </Transition>
    </div>
  );
}
