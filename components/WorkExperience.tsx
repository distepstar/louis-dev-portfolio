"use client";

import { scrollTo } from "@/utils";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { WorkExperienceCard } from ".";
import { linkedinProfile, workExperiences } from "../consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";

export default function WorkExperience() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="common__container_class lg:h-[130em] h-[235em]" ref={ref}>
      <Transition.Root
        show={inView}
        enter="transition-all ease-in-out duration-200"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-6"
      >
        <div className="w-full flex flex-col py-44 lg:space-y-24 space-y-12 justify-start items-center">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="lg:text-[5em] text-[3em] text-center font-semibold">
              Work Experience
            </h1>
            <span className="font-semibold text-center ">
              Want to know how I put my skills in real life situation?
            </span>
          </div>

          <Transition.Child
            enter="transition-all ease-in-out duration-200 delay-300"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all ease-in-out duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-6"
          >
            <div className="w-full flex flex-col justify-start items-center space-y-4">
              {workExperiences.map((work, idx) => (
                <WorkExperienceCard
                  key={`work__experience_card_${idx}`}
                  {...work}
                />
              ))}
            </div>

            <div className="w-full py-12">
              <Link
                className="w-full font-semibold inline-flex justify-center items-center hover:underline hover:underline-offset-4 group text-center"
                href={linkedinProfile}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View More On Resume</span>
                <div className="flex whitespace-nowrap w-4 h-4">
                  <FontAwesomeIcon
                    className="group-hover:ml-6 ml-4 w-4 h-4"
                    icon={faChevronRight}
                  />
                </div>
              </Link>
            </div>
          </Transition.Child>
        </div>
      </Transition.Root>
    </div>
  );
}
