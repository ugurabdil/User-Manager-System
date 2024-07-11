import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import '../css/User.css';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/UserCreateSlice';
import { IoCheckmark } from "react-icons/io5";
import '../css/User.css';

const formatPhone = (inputPhone) => {
  const formattedPhone = inputPhone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
  return formattedPhone;
}

const formatDateM = (inputDate) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  return new Date(inputDate).toLocaleString('tr-TR', options);
}
const formatDate = (inputDate) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(inputDate).toLocaleDateString('tr-TR', options);
}

function User({ userProps }) {
  const dispatch = useDispatch();
  const { id, currentDate, userName, tckn, name, date, phone, mail } = userProps;

  const [editable, setEditable] = useState(false);

  const handleRemoveUser = () => {
    dispatch(removeUser(id));
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="User information">
          <TableBody>
            <TableRow className='tabale-row'>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {editable ? <input style={{ outline: 'none' }} type="text" defaultValue={userName} /> : userName}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {editable ? <input style={{ outline: 'none' }} type="text" defaultValue={tckn} /> : tckn}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {editable ? <input style={{ outline: 'none' }} type="text" defaultValue={name} /> : name}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {editable ? <input style={{ outline: 'none' }} type="date" defaultValue={date} /> : formatDate(date)}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 70 }} align="left" width='208'>
                {editable ? <input style={{ outline: 'none' }} type="tel" defaultValue={phone} /> : formatPhone(phone)}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {editable ? <input style={{ outline: 'none' }} type="email" defaultValue={mail} /> : mail}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 50 }} align="left" width='208'>
                {editable ? (
                  <input style={{ outline: 'none' }} type="datetime-local" defaultValue={currentDate} readOnly />
                ) : (
                  formatDateM(currentDate)
                )}
              </TableCell>
              <TableCell sx={{ minWidth: 10, maxWidth: 20, fontSize: 20, cursor: 'pointer' }} align="left" width='100'>
                {editable ? <IoCheckmark onClick={() => setEditable(false)} /> : <CiEdit onClick={() => setEditable(true)} />}
              </TableCell>
              <TableCell sx={{ minWidth: 10, maxWidth: 20, fontSize: 20, cursor: 'pointer' }} align="left" width='100'>
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
