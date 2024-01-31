// import  "../public/corpcomment.png"
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiDocumentReport } from "react-icons/hi";
import { HiChartSquareBar } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";



// import "../public/rmtdev.png"
// import "@/public/wordanalytics.png"
import {
  Corpcomment,
  Rmtdev,
  Wordanalytics,
} from "../public";

// const corpcomment = "../public/corpcomment.png";
// const rmtdev = "../public/rmtdev.png"
// const wordanalytics = "@/public/wordanalytics.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data analysis at Collective Wisdom",
    location: "Thailand, Bangkok",
    description:
      "4 months. Analyze data and help develop models with Python. Analyze data and compare competing companies in order to offer partner products for sale. Do ETL with SQL. Convert complicated Python code into SQL.",
    icon: React.createElement(HiDocumentReport),
    date: "2022-2023",
  },
  {
    title: " Data Scientinst at WorkVenture",
    location: "Thailand, Bangkok",
    description:
      "Work with all foreigners. Responsible for working with data to receive and send APIs with Flask. Develop functions on the website that display real-time data to create various graphs, Machine Learning and Statistics Models that create value for People who use it to get information to create value for the company.",
    icon: React.createElement(HiChartSquareBar),
    date: "2024",
  },
  {
    title: "Business Analyst at  Growth Innovation Company",
    location: "Thailand, Bangkok.",
    description:
      "Get requiments and guide customers in using Salesforce. Talk with customers to understand each other. Negotiate with customers",
    icon: React.createElement(HiOutlineOfficeBuilding),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Deposit Model for Bank",
    description:
      "This web app show model and you can predict Customer time deposit on this web app. The model was analyzed in detail using various measures and Econometrics. It's work for bank",
    tags: ["Python", "Econometric", "Streamlit", "Excel"],
    imageUrl: Corpcomment,
    link: "https://deposit-model-by-piw.streamlit.app/",
  },
  {
    title: "Web for find jobs",
    description:
      "Find job web app. This web ‘job on you’ for find job. This just have frontend. This web have estimate salary for go to salary prediction. React, JS, HTML, CSS, Tailwind CSS, Netlify",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: Rmtdev,
    link: "https://job-on-you-by-piw.netlify.app/find-jobs",
  },
  {
    title: "Salary Model and Predict web app",
    description:
      "This web app show model and you can predict Salary from real data on this web app. The model was analyzed in detail using various measures and Econometrics. ",
    tags: ["Econometrics", "Python", "Streamlit", "Excel"],
    imageUrl: Wordanalytics,
    link: "https://salary-predict-piw.streamlit.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "Econometric",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Streamlit",
] as const;
