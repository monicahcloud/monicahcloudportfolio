import React from 'react'

const ContactInfoItem = ({ icon, info }) => {

  return (
    <>
      <div className=''>
        <div className='contactInfoItem'>
          <div className="contactIcon" > {icon}</div>
          <div className="info">{info}</div>
        </div>
      </div>
    </>
  )
}

export default ContactInfoItem
