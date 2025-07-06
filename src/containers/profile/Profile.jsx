import React from 'react'
import "./profile.css"

const Profile = ({employee}) => {
  console.log(employee);
  return (
    <div className='profile'>
      <h1>Employee Details</h1>
      <div className='profile__details'>
        <div className='profile__left'>
        <img src={employee.image} alt='hero' />
      </div>
      <div className='profile__right'>
              <div className="heading">
                {employee.firstName} {employee.lastName} (
                {employee.age})
              </div>
              <span>{employee.address}</span>
              <span>{employee.email}</span>
              <span>Contact - {employee.contactNumber}</span>
              <span>Dob - {employee.dob}</span>
      </div>
      </div>
    </div>
  )
}

export default Profile;
