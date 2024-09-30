import React from 'react'
import Title from './Title';
import ContactInfoItem from './ContactInfoItem';
import { MdPlace, MdLocalPhone, MdEmail } from 'react-icons/md'
import ContactForm from './ContactForm';
import img from '../images/logo.jpg'

const ContactSection = () => {
  return (
    <>
<div className='contactSectionStyle'>
    <div className='container'>
       <Title title='contact' 
       subtitle='me' 
       mantra='  Interested in working together? ' />
          <p className="">
          Complete the form below with some
            information about your project. Please allow 3 days for me to get back
            to you.
          </p>
          <div className="contactSection_wrapper">
            <div className="left">
<div style={{width: '500px', height:'100px', marginBottom:'50px'}}><img src={img} alt=''/></div>
              <ContactInfoItem icon={<MdLocalPhone />} info='262-613-0175' />
              <ContactInfoItem icon={<MdEmail />} info='monicahcloud@gmail.com' />
              <ContactInfoItem icon={<MdPlace />} info='this is location' />

            </div>
            <div className="right">

              <ContactForm />
            </div>
          </div>

    </div>
    </div>
    </>
  )
}

export default ContactSection
