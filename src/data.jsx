import {  FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import pic1 from './images/2-removebg-preview.png'
import pic3 from './images/7-removebg-preview.png'
import pic2 from './images/4-removebg-preview.png'
import pic5 from './images/5-removebg-preview.png'
import pic4 from './images/4-removebg-preview.png'
import pic6 from './images/9-removebg-preview.png'


export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/services',
    text: 'services',
  },
  {
    id: 3,
    url: '/portfolio',
    text: 'portfolio',
  },
  {
    id: 4,
    url: '/contact',
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