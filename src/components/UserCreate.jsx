import React, { useState } from 'react'
import '..//css/UserCreate.css'
import { useDispatch } from 'react-redux'
import { createUser } from '../redux/UserCreateSlice'

function UserCreate() {
  const dispatch=useDispatch()

  const [newUserName ,setNewUserName]=useState('')
  const [newTckn,setnewTckn]=useState('')
  const [newName,setNewName]=useState('')
  const [newDate, setNewDate]=useState('')
  const [newPhone,setNewPhone]=useState('')
  const [newMail,setNewMail]=useState('')

  const handleCreateUser=()=>{
    if (
      newUserName.trim().length === 0 ||
      newTckn.trim().length === 0 ||
      newName.trim().length === 0 ||
      newDate.trim().length === 0 ||
      newPhone.trim().length === 0 ||
      newMail.trim().length === 0
    ) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    const payload={
      id:Math.floor(Math.random()*99999999),
      userName:newUserName,
      tckn:newTckn,
      name:newName,
      date:newDate,
      phone:newPhone,
      mail:newMail
    }
    dispatch(createUser(payload))
    alert('Kullanıcı eklendi.')
    setNewUserName('')
    setnewTckn('')
    setNewName('')
    setNewDate('')
    setNewPhone('')
    setNewMail('')
  }
  return (
    <div className='userCreateContainer'>
        
      <div  className='userCreateContainer-child-1'>
          
          <div className='userİnfo'><p className='p'>Kullanıcı Ad: </p>
          <input
          value={newUserName}
          onChange={(e)=>setNewUserName(e.target.value)}
          className='ınp' type="text"placeholder='Kullanıcı Adı giriniz...' /></div>

          <div className='userİnfo'><p className='p'>TC Kimlik Numarası: </p>
          <input
          value={newTckn}
          onChange={(e)=>setnewTckn(e.target.value)}
          className='ınp' placeholder='TC Kimlik numaranızı giriniz' type="text" /></div>

          <div className='userİnfo'><p className='p'>Ad Soyad : </p >
          <input
          value={newName}
          onChange={(e)=>setNewName(e.target.value)}
          className='ınp' type="text" placeholder='Adı ve Soyad giriniz...' /></div>

          <div className='userİnfo'><p className='p'>Doğum Tarihi: </p>
          <input
          value={newDate}
          onChange={(e)=>setNewDate(e.target.value)}
          className='ınp' type='date'/></div>
          <div className='userİnfo'><p className='p'>Telefon No: </p>
          <input
          value={newPhone}
          onChange={(e)=>setNewPhone(e.target.value)}
          className='ınp' type="tel"
      placeholder='Telefon No giriniz...' /></div>

          <div className='userİnfo'><p className='p'>E-mail: </p>
          <input
          value={newMail}
          onChange={(e)=>setNewMail(e.target.value)}
          className='ınp' type="email" placeholder='E-mail adresinizi giriniz...' /></div>
          
          <button onClick={handleCreateUser} > Kaydet </button>
      </div>
      
      
    </div>
  )
}

export default UserCreate
