"use client";
import React from "react";
import Link from "next/link";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { IWorkExperienceCard, linkedinProfile } from "../consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsBulletBox: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div className="flex px-4 py-1 justify-center items-center bg-cyan-500 font-semibold rounded-lg">
      {skill}
    </div>
  );
};

export default function WorkExperienceCard({
  employmentDate = "JULY - PRESENT",
  title = "TESTING",
  refLink = linkedinProfile,
  description = "TESTING DESCRIPTION",
  links,
  skills = ["Test"],
}: IWorkExperienceCard) {
  const [jobTitle, company] = title.split("-");

  return (
    <div className="relative w-full group rounded-lg z-20">
      <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-4 flex-wrap justify-between items-start transition duration-300 ease-in-out group-hover:bg-slate-900/60 p-12 text-slate-200 rounded-lg">
        <span className="sm:w-[30%] text-sm font-semibold text-slate-400">
          {employmentDate}
        </span>
        <div className="sm:w-[70%] flex flex-col justify-between items-center space-y-4">
          <Link
            className="text-2xl font-semibold w-full cursor-pointer"
            href={refLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="inline-block group-hover:text-cyan-300 transition duration-100">
              {jobTitle}
              <FontAwesomeIcon
                className="inline-block ml-2 w-5 h-5"
                icon={faLink}
              />
            </div>
            <div className="text-xl text-slate-400 group-hover:text-cyan-300 transition duration-100">
              {company}
            </div>
          </Link>
          <span className="w-full">{description}</span>
          <div className="w-full">
            {links
              ? links.map((link, idx) => (
                  <div key={`work__experience_link_${idx}`}>
                    <div>{link.title}</div>
                    <div>{link.url}</div>
                  </div>
                ))
              : null}
          </div>
          <div className="w-full flex flex-row flex-wrap gap-3">
            {skills
              ? skills.map((sk, idx) => (
                  <SkillsBulletBox
                    key={`work__experience_skill_${idx}`}
                    skill={sk}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
