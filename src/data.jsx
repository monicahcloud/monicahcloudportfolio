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
		url: 'www.crownoflocs.com',
		title: 'Crown of Locs and Natural Hair LLC.',
		topic: 'small business',
		image: 'https://picsum.photos/200/300',
		info: 'This project was built using ReactJS. ',
	},
	{
		id: 2,
		url: 'www.nerahspassion.com',
		title: 'Nerahs Passion',
		topic: 'landing page business',
		image: 'https://picsum.photos/200/300',
		info: 'This project was built using ReactJS. ',
	},
	{
		id: 3,
		url: '',
		title: 'portfolio',
		topic: 'blog website',
		image: 'https://picsum.photos/200/300',
		info: 'This project was built using ReactJS. ',
	},
	{
		id: 4,
		url: '',
		title: "Keto & PCOS: Monicah's Journey",
		topic: 'personal website',
		image: 'https://picsum.photos/200/300',
		info: 'This project was built using ReactJS. ',
	},
	{
		id: 5,
		url: '',
		title: 'tutorials',
		topic: '',
		image: 'https://picsum.photos/200/300',
		info: 'This project was built using ReactJS. ',
	},
	{
		id: 6,
		url: '',
		title: 'tutorials',
		topic: '',
		image: 'https://picsum.photos/200/300',
		info: 'This project was built using ReactJS. ',
	},
]