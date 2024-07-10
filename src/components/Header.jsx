import React from 'react'
import { Link } from "react-router-dom";
import '../css/Header.css'
import { CiSearch } from "react-icons/ci";


function Header() {
  return (
    <div className='headerContainer'>
      <div className='header-child-1'>
       <h1>Kullanıcı Yönetimi</h1>
      </div>
      <div className='header-child-2'>
        <Link className='link' to="/">Kullanıcı Ekle</Link>|
        <Link className='link' to="/userList">Kullanıcı Listesi</Link>
      </div>
    </div>
  )
}

export default Header
