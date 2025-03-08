import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import bizHub from "../public/bizHub.jpg";
import celeste from "../public/celeste.jpg";
import asea from "../public/asea.jpg";
import gameHub from "../public/gameHub.png";
import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  {
    id: nanoid(),
    href: "#home",
    text: "home",
  },

  {
    id: nanoid(),
    href: "#about",
    text: "about",
  },
  {
    id: nanoid(),
    href: "#skills",
    text: "skills",
  },
  {
    id: nanoid(),
    href: "#experience",
    text: "experience",
  },
  {
    id: nanoid(),
    href: "#projects",
    text: "projects",
  },
  {
    id: nanoid(),
    href: "#contact",
    text: "contact",
  },
];

export const social = [
  {
    id: nanoid(),
    url: "https://www.facebook.com/monicahcloud",
    icon: <FaFacebook />,
  },

  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/cloudmonicah/",
    icon: <FaLinkedin />,
  },
  {
    id: nanoid(),
    url: "https://www.github.com/monicahcloud",
    icon: <FaGithub />,
  },
];

export const services = [
  {
    id: nanoid(),
    title: "Web Designer",
    icon: <MdOutlineDesignServices />,
    desc: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: nanoid(),
    title: "Web Developer",
    icon: <MdOutlineDesignServices />,
    desc: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: nanoid(),
    title: "graphic design",
    icon: <MdOutlineDesignServices />,
    desc: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const projects = [
  {
    id: nanoid(),
    align: "right",
    url: "https://gamehubsplendid.netlify.app/",
    title: "Game Hub",
    topic: "",
    image: gameHub,
    info: " The site 'Game Hub' is a platform for discovering and exploring various games, providing users with game information, images, and genres. It offers a modern and engaging user interface tailored for gamers.",
    git: "https://github.com/monicahcloud/gameHub",
  },
  {
    id: nanoid(),
    align: "left",
    url: "https://vitanovabusinesshub.netlify.app/",
    title: "Business Hub",
    topic: "single page business website",
    image: bizHub,
    info: "The VitaNova Business Hub website offers an all-in-one solution for businesses to manage client scheduling, invoicing, and workflow streamlining. It promotes convenience by consolidating multiple business tools into one platform. ",
    git: "https://github.com/monicahcloud/nerahspassion",
  },
  {
    id: nanoid(),
    align: "right",
    url: "https://healthandwellnessbycelestine.com/",
    title: "Health and Wellness by Celestine",
    topic: "",
    image: celeste,
    info: " The Health and Wellness by Celestine website focuses on promoting holistic health and well-being through personalized services, guidance, and resources aimed at enhancing physical, mental, and spiritual wellness.",
    git: "https://github.com/monicahcloud/gameHub",
  },
  {
    id: nanoid(),
    align: "left",
    url: "https://aseamerchstore.vercel.app/",
    title: "ASEA Merch Store",
    topic: "single page business website",
    image: asea,
    info: "The ASEA Merch Store website offers branded merchandise such as t-shirts, banners, and other promotional items designed for ASEA associates to showcase their brand at events and gatherings. ",
    git: "https://github.com/monicahcloud/nerahspassion",
  },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];
