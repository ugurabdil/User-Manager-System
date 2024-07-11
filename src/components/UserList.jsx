import React, { useState } from 'react';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { allUsersRemove, searchUsers } from '../redux/UserCreateSlice';
import '../css/User.css';
import { CiSearch } from "react-icons/ci";

function UserList() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const [newSearch, setNewSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchUser = () => {
    const result = users.filter((user) =>
      user.userName.includes(newSearch) ||
      user.tckn.includes(newSearch) ||
      user.name.includes(newSearch) ||
      user.phone.includes(newSearch) ||
      user.mail.includes(newSearch)
    );
    setSearchResult(result);
  };

  const allRemoveUser = () => {
    dispatch(allUsersRemove());
  };

  if (users.length === 0) {
    return <h2 style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',margin:'100px' }}>Kullanıcı Listesi Boş</h2>;
  }

  return (
    <div className='userContainer'>
      <div className='header-child-1'>
        <input
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
          className='header-child-1-input'
          type="text"
          placeholder='Kullanıcı Ara...'
        />
        <CiSearch onClick={handleSearchUser} className='header-child-1-btn' />
      </div>

      <div className='userContainer-child-2'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="User information">
            <TableHead style={{backgroundColor:'#dee2e6'}}>
              <TableRow>
                <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>Kullanıcı Adı</TableCell>
                <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>TC Kimlik No</TableCell>
                <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>Ad Soyad</TableCell>
                <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>Doğum Tarihi</TableCell>
                <TableCell sx={{ minWidth: 50, maxWidth: 70 }} align="left" width='208'>Telefon No</TableCell>
                <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>Email</TableCell>
                <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>Kayıt Zamanı</TableCell>
                <TableCell sx={{ minWidth: 10, maxWidth: 20 }} align="left" width='100'>Güncelle</TableCell>
                <TableCell sx={{ minWidth: 10, maxWidth: 20 }} align="left" width='100'>Sil</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {searchResult === null ? (
          users.map((user) => (
            <User key={user.id} userProps={user} />
          ))
        ) : searchResult.length > 0 ? (
          searchResult.map((user) => (
            <User key={user.id} userProps={user} />
          ))
        ) : (
          <h2>Kullanıcı Bulunamadı</h2>
        )}
      </div>
      <div className='button'>
        <button className='btn' onClick={allRemoveUser}>Tüm kullanıcıları sil</button>
      </div>
    </div>
  );
}

export default UserList;
