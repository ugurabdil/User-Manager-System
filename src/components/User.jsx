import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { removeUser, updatedUser } from '../redux/UserCreateSlice'; // Örneğin updateUser eyleminiz
import '../css/User.css'
// Telefon numarasını formatlamak için yardımcı fonksiyon
const formatPhone = (inputPhone) => {
  const formattedPhone = inputPhone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
  return formattedPhone;
}

// Tarihi formatlamak için yardımcı fonksiyon
const formatDate = (inputDate) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(inputDate).toLocaleDateString('tr-TR', options);
}

const User = ({ userProps }) => {
  const dispatch = useDispatch();
  const { id, currentDate, userName, tckn, name, date, phone, mail } = userProps;

  // Kullanıcı düzenleme modunu takip etmek için state kullanımı
  const [editable, setEditable] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [newTckn, setNewTckn] = useState(tckn);
  const [newName, setNewName] = useState(name);
  const [newDate, setNewDate] = useState(date);
  const [newPhone, setNewPhone] = useState(phone);
  const [newMail, setNewMail] = useState(mail);

  // Kullanıcıyı silme işlemi için dispatch fonksiyonu kullanımı
  const handleRemoveUser = () => {
    dispatch(removeUser(id));
  }

  // Kullanıcıyı güncelleme işlemi için dispatch fonksiyonu kullanımı
  const handleUpdateUser = () => {
    setEditable(false); // Düzenleme modunu kapat
    const payload = {
      id: id,
      currentDate: new Date().toISOString(), // Güncel tarihi ISO formatında al
      userName: newUserName,
      tckn: newTckn,
      name: newName,
      date: newDate,
      phone: newPhone,
      mail: newMail
    };
    dispatch(updatedUser(payload)); // Kullanıcıyı güncelleme eylemini dispatch et
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Kullanıcı bilgileri">
          <TableBody>
            <TableRow className='tabale-row'>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {/* Düzenleme modu açıksa input, değilse kullanıcı adını göster */}
                {editable ? <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                         : userName}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {/* Düzenleme modu açıksa input, değilse TC kimlik numarasını göster */}
                {editable ? <input type="text" value={newTckn} onChange={(e) => setNewTckn(e.target.value)} />
                         : tckn}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {/* Düzenleme modu açıksa input, değilse ismi göster */}
                {editable ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                         : name}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {/* Düzenleme modu açıksa input, değilse tarihi göster */}
                {editable ? <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                         : formatDate(date)}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 70 }} align="left" width='208'>
                {/* Düzenleme modu açıksa input, değilse telefon numarasını formatlı göster */}
                {editable ? <input type="tel" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
                         : formatPhone(phone)}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {/* Düzenleme modu açıksa input, değilse e-posta adresini göster */}
                {editable ? <input type="email" value={newMail} onChange={(e) => setNewMail(e.target.value)} />
                         : mail}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {/* Düzenleme modu açıksa güncel tarihi readonly input olarak göster, değilse formatlı tarihi göster */}
                {editable ? <input type="datetime-local" value={new Date().toISOString()} readOnly /> 
                         : new Date(currentDate).toLocaleString('tr-TR')}
              </TableCell>
              <TableCell sx={{ minWidth: 10, maxWidth: 20 }} align="center" width='208'>
                {/* Düzenleme modu açıksa onay işaretini, değilse düzenleme modunu açma işaretini göster */}
                {editable ? <IoCheckmark onClick={handleUpdateUser} /> 
                         : <CiEdit onClick={() => setEditable(true)} />}
              </TableCell>
              <TableCell sx={{ minWidth: 10, maxWidth: 20 }} align="left" width='208'>
                {/* Kullanıcıyı silme işaretini göster */}
                <AiOutlineDelete onClick={handleRemoveUser} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default User;
