"use client";
import { ProjectCard } from ".";
import Link from "next/link";
import { projectCardList, githubProfile } from "@/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";
import { scrollTo } from "../utils";

export default function Projects() {
  const { ref, inView, entry } = useInView({ threshold: 0.2 });
  return (
    <div className="common__container_class sm:h-[110em] h-[190em]" ref={ref}>
      <Transition.Root
        show={inView}
        enter="transition-all ease-in-out duration-200"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-6"
      >
        <div className="w-full h-full flex flex-col space-y-6 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-4 py-12 pb-24">
            <h1 className="sm:text-[5em] text-[3em] font-semibold text-center">
              My Recent Project
            </h1>
            <span className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 justify-center items-center text-center font-semibold">
              <span>
                Here are few past projects I've worked on. Want to see more?
              </span>
              <button
                className="inline-block"
                onClick={() => scrollTo("contact")}
              >
                <div className="flex justify-center items-center group">
                  <span className="underline text-cyan-400 group-hover:text-cyan-300">
                    Contact Me!
                  </span>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="underline text-cyan-400 group-hover:text-cyan-300 ml-2 "
                  />
                </div>
              </button>
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
            <div className="relative w-full flex flex-wrap gap-12 justify-center items-center">
              {projectCardList.map((item, idx) => (
                <ProjectCard key={`project-card-${idx}`} {...item} />
              ))}
            </div>
          </Transition.Child>
          <Link
            className="flex justify-center items-center px-4 py-2 text-center text-xl font-semibold rounded-xl bg-cyan-600 shadow-md shadow-cyan-600 hover:bg-cyan-400 hover:shadow-cyan-400 hover:shadow-lg transition duration-100"
            href={githubProfile}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="inline-block mr-2 h-6 w-6"
              icon={faGithub}
            />
            See more on GitHub
          </Link>
        </div>
      </Transition.Root>
    </div>
  );
}
