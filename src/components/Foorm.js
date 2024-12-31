import React, { useState } from 'react'
import {createPeople} from '../api'

const Foorm = ({onAdd}) => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [place, setplace] = useState('')
    const [datee, setdatee] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();      
        const newPeople = {
          firstName:firstname,
          lastName:lastname,
          email:email,
          phoneNumber:phonenumber,
          place:place,
          datee:datee,
        };
      
        
        try {
          const { data } = await createPeople(newPeople);
          onAdd(data); // Pass the new data to the parent component
          setfirstname('');
          setlastname('');
          setemail('');
          setphonenumber('');
          setplace('');
          setdatee('')
        } catch (error) {
          console.error('Error adding new person:', error);
        }
      };
      
      
      

  return (
    <>
    <h1>Book Your Seat</h1>
    <div className='allcontainer'>
      <div className='imagecontainer'>
        <img className='imagee' src='https://www.smithandwollensky.com/wp-content/uploads/2023/02/Overhead-Table.jpg' />
      </div>
      <form onSubmit={handleSubmit} className='mainform'>
        <input placeholder='Firstname' value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} type='text' required/>
        <input placeholder='lasttname' value={lastname} onChange={(e)=>{setlastname(e.target.value)}} type='text'required/>
        <input placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} type='email'required/>
        <input placeholder='phonenumber' value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}} type='number' required/>
        <input placeholder='place' value={place} onChange={(e)=>{setplace(e.target.value)}} type='text' required/>
        <input placeholder='yyyy/mm/dd' value={datee} onChange={(e)=>{setdatee(e.target.value)}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Foorm
