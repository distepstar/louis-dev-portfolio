"use client";

import Link from "next/link";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import { scrollTo } from "../utils";
import { Menu, Transition } from "@headlessui/react";
import { DropDownTrail } from ".";
import {
  Bars3BottomRightIcon,
  RocketLaunchIcon,
  ChatBubbleOvalLeftIcon,
  CodeBracketIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/20/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { githubProfile, linkedinProfile } from "@/consts";

export default function Navbar() {
  const [typeWritingTitle, setTypeWritingTitle] = useState("Louis Dev|...");
  const [isOpen, setIsOpen] = useState(false);
  const [y, setY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  const handleScrollDirection = useCallback(
    (e: { currentTarget: any }) => {
      const window = e.currentTarget;

      if (y > window.scrollY) {
        setIsOpen(true);
      } else if (y < window.scrollY) {
        setIsOpen(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleScrollDirection);

    const timeout = setTimeout(() => {
      setTypeWritingTitle(
        typeWritingTitle.slice(0, typeWritingTitle.length + 1)
      );
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
      clearTimeout(timeout);
    };
  }, [typeWritingTitle, handleScrollDirection]);

  return (
    <header
      className={
        `w-full flex flex-col place-items-center z-10 fixed ` +
        (isOpen ? "pointer-events-auto" : "pointer-events-none")
      }
    >
      <DropDownTrail customClass="w-full px-12" open={isOpen}>
        <div className="lg:h-26 h-20 flex flex-row justify-between place-items-center bg-slate-800 bg-opacity-70 rounded-2xl w-full lg:my-12 my-10 shadow-lg">
          <h1
            className="lg:text-3xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-cyan-400 blinking-cursor cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            {typeWritingTitle}
          </h1>
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button
                    className="inline-flex w-full justify-center rounded-md bg-slate-600 bg-opacity-60 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    id="1"
                  >
                    <Bars3BottomRightIcon
                      className="lg:h-6 lg:w-6 h-8 w-8 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                {open && isOpen ? (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 lg:w-56 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-cyan-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => scrollTo("about")}
                          >
                            <ChatBubbleOvalLeftIcon
                              className="mr-2 h-5 w-5 fill-slate-800"
                              aria-hidden="true"
                            />
                            About
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-cyan-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => scrollTo("work")}
                          >
                            <BuildingOffice2Icon
                              className="mr-2 h-5 w-5 fill-slate-800"
                              aria-hidden="true"
                            />
                            Work
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-cyan-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => scrollTo("projects")}
                          >
                            <CodeBracketIcon
                              className="mr-2 h-5 w-5 fill-slate-800"
                              aria-hidden="true"
                            />
                            Projects
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-cyan-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <RocketLaunchIcon
                              className="mr-2 h-5 w-5 fill-slate-800"
                              aria-hidden="true"
                            />
                            Contact
                          </button>
                        )}
                      </Menu.Item>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active
                                  ? "bg-cyan-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-1 py-2 text-sm`}
                              href={githubProfile}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faGithub}
                                className="mr-2 h-5 w-5 text-slate-800"
                              />
                              GitHub
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active
                                  ? "bg-cyan-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-1 py-2 text-sm`}
                              href={linkedinProfile}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                className="mr-2 h-5 w-5 rounded-md text-slate-800"
                              />
                              LinkedIn
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                ) : null}
              </>
            )}
          </Menu>
        </div>
      </DropDownTrail>
    </header>
  );
}
