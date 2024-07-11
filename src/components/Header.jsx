import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../css/Header.css'
import { MdPersonAddAlt } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";



function Header() {

  const [open, setOpen]=useState(true)
  const [newOpen, setNewOpen]=useState(false)

  const linkNameOpen=()=>{
    setOpen(true)
    setNewOpen(false)
  }

  const linkListOpen=()=>{
    setNewOpen(true)
    setOpen(false)
  }
  // const closeAll=()=>{
  //   setOpen(true)
  //   setNewOpen(false)
  // }
  return (
    <div className='headerContainer'>
      <div className='header-child-1'>
       <h1>Kullanıcı Yönetimi</h1>
      </div>
      <div className='header-child-2'>
        <Link className='link' to="/"><MdPersonAddAlt onClick={linkNameOpen}   className='link-icon'/> {open && <p>Kullanıcı Ekle </p>} </Link> 
        <Link className='link' to="/userList"><PiUserListBold onClick={linkListOpen} className='link-icon'/>{newOpen && <p>Kullanıcı Listesi</p>} </Link>
      </div>
    </div>
  )
}

export default Header
