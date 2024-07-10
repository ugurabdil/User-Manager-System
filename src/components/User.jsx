import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import '../css/User.css';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/UserCreateSlice';
import { IoCheckmark } from "react-icons/io5";

function User({ userProps }) {
  const dispatch = useDispatch();
  const { id, userName, tckn, name, date, phone, mail } = userProps;

  const [editable, setEditable] = useState(false);

  const handleRemoveUser = () => {
    dispatch(removeUser(id));
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="User information">
          <TableBody>
            <TableRow>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {editable ? <input style={{outline:'none'}} type="text" defaultValue={userName} /> : userName}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {editable ? <input style={{outline:'none'}} type="text" defaultValue={tckn} /> : tckn}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {editable ? <input style={{outline:'none'}} type="text" defaultValue={name} /> : name}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {editable ? <input style={{outline:'none'}} type="date" defaultValue={date} /> : date}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {editable ? <input style={{outline:'none'}} type="tel" defaultValue={phone} /> : phone}
              </TableCell>
              <TableCell sx={{ minWidth: 50, maxWidth: 100 }} align="left" width='208'>
                {editable ? <input style={{outline:'none'}} type="email" defaultValue={mail} /> : mail}
              </TableCell>
              <TableCell sx={{ minWidth: 10, maxWidth: 50, fontSize: 20, cursor: 'pointer' }} align="left" width='100'>
                {editable ? <IoCheckmark onClick={() => setEditable(false)} /> : <CiEdit onClick={() => setEditable(true)} />}
              </TableCell>
              <TableCell sx={{ minWidth: 10, maxWidth: 50, fontSize: 20, cursor: 'pointer' }} align="left" width='100'>
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
