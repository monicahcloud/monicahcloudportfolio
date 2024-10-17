import React from 'react'
import ContactInfoItem from './ContactInfoItem';
import { MdPlace, MdLocalPhone, MdEmail } from 'react-icons/md'
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <>
      <div className='contactSectionStyle'>
        <div className='contactContainer'>
        <h1 style={{color:'#fff', textAlign:'center', marginBottom: '0', fontSize: '4.3rem'}}>Contact <span> </span></h1>
          <p className="">
            Complete the form below with some
            information about your project. Please allow 3 days for me to get back
            to you.
          </p>
          <div className="contactSection_wrapper">
            <div className="contactLeft">
              <div style={{ width: '500px', height: '100px', marginBottom: '50px' }}><img src='' alt='' /></div>
              <ContactInfoItem icon={<MdLocalPhone />} info='262-613-0175' />
              <ContactInfoItem icon={<MdEmail />} info='monicahcloud@gmail.com' />
              <ContactInfoItem icon={<MdPlace />} info='this is location' />

            </div>
            <div className="contactRight">

              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContactSection
