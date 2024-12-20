import {  FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import pic1 from '../src/assets/images/7-removebg-preview.png'




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
    url: 'projects',
    text: 'projects',
  },
  {
    id: 4,
    url: 'contact',
    text: 'contact',
  },

]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/monicahcloud',
    icon: <FaFacebook />,
  },

  {
    id: 2,
    url: 'https://www.linkedin.com/in/cloudmonicah/',
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
    url: 'https://gamehubsplendid.netlify.app/',
    title: 'Game Hub',
    topic: '',
    image: { pic1 },
    info: ' ',
    git: 'https://github.com/monicahcloud/gameHub',
  },
  {
    id: 2,
    url: 'https://www.nerahspassion.com',
    title: 'Nerahs Passion',
    topic: 'single page business website',
    image: '../src/assets/images/nerrahspassion.png',
    info: 'This is a single page website. ',
    git: 'https://github.com/monicahcloud/nerahspassion',
  },

]