import {  FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import pic1 from './images/2-removebg-preview.png'
import pic3 from './images/7-removebg-preview.png'
import pic2 from './images/4-removebg-preview.png'
import pic5 from './images/5-removebg-preview.png'
import pic4 from './images/4-removebg-preview.png'
import pic6 from './images/9-removebg-preview.png'


export const links = [
  {
    id: 1,
    url: 'about',
    text: 'home',
  },
  {
    id: 2,
    url: 'services',
    text: 'services',
  },
  {
    id: 5,
    url: 'skills',
    text: 'techologies',
  },
  {
    id: 3,
    url: 'portfolio',
    text: 'portfolio',
  },
  {
    id: 4,
    url: 'contact',
    text: 'contact',
  },
//   {
//     id: 5,
//     url: '/tutorials',
//     text: 'tutorials',
//   },
 
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/monicahcloud',
    icon: <FaFacebook />,
  },
 
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.github.com/monicahcloud',
    icon: <FaGithub />,
  },
]
export const services = [
  {
    id: 1,
    title: 'Web Designer',
    icon: <MdOutlineDesignServices />,
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },

  {
    id: 2,
    title: 'Web Developer',
    icon: <MdOutlineDesignServices />,
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 4,
    title: 'graphic design',
    icon: <MdOutlineDesignServices />,
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const projects = [
  {
    id: 1,
    url: 'https://www.crownoflocs.com',
    title: 'Crown of Locs and Natural Hair LLC.',
    topic: 'small business',
    image: './src/images/2-removebg-preview.png',
    info: 'This project was built using ReactJS. ',
    git: 'https://github.com/monicahcloud/crownoflocs',
  },
  {
    id: 2,
    url: 'https://www.nerahspassion.com',
    title: 'Nerahs Passion',
    topic: 'landing page business',
    image: './src/images/3-removebg-preview.png',
    info: 'This project was built using ReactJS. ',
    git: 'https://github.com/monicahcloud/nerahspassion',
  },
  {
    id: 3,
    url: 'https://www.google.com',
    title: 'portfolio',
    topic: 'blog website',
    image: './src/images/4-removebg-preview.png',
    info: 'This project was built using ReactJS. ',
    git: 'http://github.com/monicahcloud',
  },
  {
    id: 4,
    url: 'https://www.brp.com',
    title: "Keto & PCOS: Monicah's Journey",
    topic: 'personal website',
    image: './src/images/5-removebg-preview.png',
    info: 'This project was built using ReactJS. ',
    git: 'http://github.com/monicahcloud',
  },
]