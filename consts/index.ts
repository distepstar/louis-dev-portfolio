import React from "react";

export const workExperiences: IWorkExperienceCard[] = [
  {
    employmentDate: "2022 - PRESENT",
    title: "Technical Assistant-EnGenius Technologies Canada",
    refLink: "https://www.engeniustech.com/",
    description:
      "Responsible for EnGenius Telecommunication products repair, including the top sale Long Range DuraFon series Handsets. Diagnosed issues with defective data communication products such as access point, switches and routers. Managed RMA services for end-users and customers after selling. Built automation programs to maintain daily documenting works and handle statistical issues.",
    skills: [
      "RMA",
      "Repair",
      "Quality Assurance",
      "Soldering",
      "Technical Support",
      "Shell Script",
      "VBA",
      "Statistics",
      "MS Office",
    ],
  },
  {
    employmentDate: "2021 - 2022",
    title: "Junior Programmer (QA Developer)-Hospital Authority",
    refLink:
      "https://www.ha.org.hk/visitor/ha_index.asp?Content_ID=0&Lang=ENG&Dimension=100&Ver=HTML",
    description:
      "Developed and restructured the Automation Continuous Testing System (ACT) to handle the continuous testing for the Clinical Data Analysis and Report System (CDARS), which is internally used by clinics/hospitals under Hospital Authority. Designed test flow and case scenario for the continuous testing.",
    skills: [
      "React.js",
      "Redux.js",
      "Material-UI",
      "JavaScript",
      "Java",
      "Selenium Test",
      "Cucumber Test",
      "Postman",
      "JMeter",
      "Jira",
    ],
  },
  {
    employmentDate: "2020 - 2021",
    title: "Junior Programmer (Front End Developer)-Social Welfare Department",
    refLink: "https://www.swd.gov.hk/en/index/",
    description:
      "Developed, tested, and delivered production code for the Service Performance Management Information System version 2 (SPMIS-II e-submission system). Converted the traditional paper forms into interactive Vue.js webpages.",
    skills: [
      "Vue.js 2.0",
      "Vuelidate",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "Java",
      "JSONSchema",
      "Spring Boot",
      "Jenkins",
      "Swagger",
      "Selenium Test",
      "Cucumber Test",
    ],
  },
];

export const gameDevelopmentAbout: IAboutCardContent = {
  title: "Game Developer",
  content: `I build games that can bring you into a unrealistic dimension.`,
  sectionOneTitle: "Languages I play with:",
  sectionOneContent: ["C#", "C++", "GLSL"],
  sectionTwoTitle: "Game Engines & Plugins:",
  sectionTwoContent: [
    "Unity Engine",
    "Unreal Engine 4",
    "Steam VR",
    "VR Toolkit",
    "Vuforia AR",
  ],
};

export const frontendAbout: IAboutCardContent = {
  title: "Frontend Developer",
  content: `I enjoy building things from 0 to hero, and converting plain code into visible achievements.`,
  sectionOneTitle: "Languages I speak:",
  sectionOneContent: ["JavaScript", "TypeScript", "HTML5", "CSS", "Sass"],
  sectionTwoTitle: "Tools & Libraries:",
  sectionTwoContent: [
    "React.js",
    "Redux.js",
    "Next.js",
    "Vue.js 2.0",
    "TailwindCSS",
    "MaterialUI",
    "ThreeJS",
    "Storybook",
    "GitHub",
    "Vercel",
    "Neovim",
  ],
};

export const systemTestAbout: IAboutCardContent = {
  title: "System Test Developer",
  content: `I ensure everything in the system is functional before deploying it to the production server.`,
  sectionOneTitle: "Languages for testing:",
  sectionOneContent: ["Java", "Python", "JavaScript", "ShellScript"],
  sectionTwoTitle: "Testing Libraries:",
  sectionTwoContent: [
    "Selenium Test",
    "Cucumber Test",
    "JUnit",
    "Jmeter",
    "Postman",
    "Jira",
  ],
};

export const projectCardList: IProjectCard[] = [
  {
    title: "Custom Neovim with Lua",
    description:
      "A customized neovim implemented modern text editor plugins, written in Lua.",
    imageURL:
      "https://camo.githubusercontent.com/be086ab77475fc1419a1489305e4393bb925d93d7599046846e9c8da3e1fb0e7/68747470733a2f2f692e706f7374696d672e63632f4b384d596d6759522f72656163742d6578616d706c652e706e67",
    link: "https://github.com/distepstar/custom_neovim_lua",
  },
  {
    title: "Car Showcase App",
    description:
      "A car showcase application streamlines the process of vehicle searching, written in Next.js.",
    imageURL: "https://i.postimg.cc/zf76NHvS/Screenshot-2023-08-02-151133.png",
    link: "https://cars-showcase-nine-silk.vercel.app/",
    posX: 700,
    posY: 500,
    titleColor: "",
  },
  {
    title: "Testing",
    description: "Testing description",
    imageURL:
      "https://camo.githubusercontent.com/be086ab77475fc1419a1489305e4393bb925d93d7599046846e9c8da3e1fb0e7/68747470733a2f2f692e706f7374696d672e63632f4b384d596d6759522f72656163742d6578616d706c652e706e67",
  },
  {
    title: "Testing",
    description: "Testing description",
    imageURL:
      "https://camo.githubusercontent.com/be086ab77475fc1419a1489305e4393bb925d93d7599046846e9c8da3e1fb0e7/68747470733a2f2f692e706f7374696d672e63632f4b384d596d6759522f72656163742d6578616d706c652e706e67",
  },
  {
    title: "Testing",
    description: "Testing description",
    imageURL:
      "https://camo.githubusercontent.com/be086ab77475fc1419a1489305e4393bb925d93d7599046846e9c8da3e1fb0e7/68747470733a2f2f692e706f7374696d672e63632f4b384d596d6759522f72656163742d6578616d706c652e706e67",
  },
  {
    title: "Testing",
    description: "Testing description",
    imageURL:
      "https://camo.githubusercontent.com/be086ab77475fc1419a1489305e4393bb925d93d7599046846e9c8da3e1fb0e7/68747470733a2f2f692e706f7374696d672e63632f4b384d596d6759522f72656163742d6578616d706c652e706e67",
  },
];

export const githubProfile = "https://github.com/distepstar";
export const linkedinProfile =
  "https://www.linkedin.com/in/louis-lei-917002156";

export const dropDownDefault = {
  delay: 200,
  mass: 5,
  tension: 2000,
  friction: 500,
};

interface IWorkExperienceLink {
  title: string;
  url: string;
}
export interface IWorkExperienceCard {
  employmentDate: string;
  title: string;
  refLink?: string;
  description: string;
  links?: IWorkExperienceLink[];
  skills: string[];
}

export interface IProjectCard {
  title: string;
  titleColor?: string;
  description: string;
  imageURL?: string;
  link?: string;
  posX?: number;
  posY?: number;
}

export interface IAboutCardInfo {
  icon: React.ReactNode;
  iconBackground?: string;
  items: IAboutCardContent;
}

export interface IAboutCardContent {
  title: string;
  content: string;
  sectionOneTitle?: string;
  sectionOneContent?: string[];
  sectionTwoTitle?: string;
  sectionTwoContent?: string[];
}

export interface IDropDownIntro {
  title: string;
  customClass?: string;
  threshold?: number;
  config: Omit<IDropDownTrail, "customClass" | "open" | "children">;
}

export interface IDropDownTrail {
  customClass?: string;
  open: boolean;
  height?: number;
  delay?: number;
  mass?: number;
  tension?: number;
  friction?: number;
  children: React.ReactNode;
}
