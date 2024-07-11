import React, { useState, useEffect } from 'react';
import '../css/UserCreate.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/UserCreateSlice';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function UserCreate() {
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [newUserName, setNewUserName] = useState('');
  const [newTckn, setNewTckn] = useState('');
  const [newName, setNewName] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newMail, setNewMail] = useState('');

  useEffect(() => {
    if (success) {
      const successTimer = setTimeout(() => {
        setSuccess(false);
      }, 3000); // Başarı mesajını 3 saniye sonra gizle
      return () => clearTimeout(successTimer);
    }

    if (error) {
      const errorTimer = setTimeout(() => {
        setError('');
      }, 5000); // Hata mesajını 5 saniye sonra gizle
      return () => clearTimeout(errorTimer);
    }
  }, [success, error]);

  const nameRegex = /^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/;

  const handleCreateUser = () => {
    const today = new Date().toISOString().split('T')[0]; // Bugünün tarihi (YYYY-MM-DD formatında)

    if (newUserName.trim().length === 0) {
      setError('Kullanıcı adı boş bırakılamaz');
      return;
    }

    if (newTckn.trim().length === 0 || isNaN(newTckn)||newTckn.startsWith('0')) {
      setError('Geçerli bir TC Kimlik Numarası giriniz');
      return;
    }

    if (!nameRegex.test(newName.trim())) {
      setError('Ad Soyad yalnızca harflerden oluşmalıdır');
      return;
    }

    if (newDate.trim().length === 0 || newDate >= today) {
      setError('Geçerli bir doğum tarihi giriniz');
      return;
    }

    if (newPhone.trim().length !== 10 || isNaN(newPhone) || newPhone.startsWith('0')) {
      setError('Geçerli bir telefon numarası giriniz (10 haneli ve başında 0 olmamalı)');
      return;
    }

    if (newMail.trim().length === 0) {
      setError('E-mail adresi boş bırakılamaz');
      return;
    }

    const payload = {
      id: Math.floor(Math.random() * 99999999),
      currentDate: new Date().toLocaleString(),
      userName: newUserName,
      tckn: newTckn,
      name: newName,
      date: newDate,
      phone: newPhone,
      mail: newMail
    };

    dispatch(createUser(payload));
    setSuccess(true);
    setNewUserName('');
    setNewTckn('');
    setNewName('');
    setNewDate('');
    setNewPhone('');
    setNewMail('');
    setError('');
  };

  return (
    <div className='userCreateContainer'>
      <div className='userCreateContainer-child-1'>
        {error && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant='filled' severity='warning'>
              {error}
            </Alert>
          </Stack>
        )}
        {success && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant='filled' severity='success'>
              Kullanıcı Başarıyla Eklendi
            </Alert>
          </Stack>
        )}
        <div className='userİnfo'>
          <p className='p'>Kullanıcı Ad: </p>
          <input
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className='ınp'
            type='text'
            placeholder='Kullanıcı Adı giriniz...'
          />
        </div>

        <div className='userİnfo'>
          <p className='p'>TC Kimlik Numarası: </p>
          <input
            value={newTckn}
            onChange={(e) => setNewTckn(e.target.value)}
            className='ınp'
            placeholder='TC Kimlik numarası giriniz'
            type='text'
          />
        </div>

        <div className='userİnfo'>
          <p className='p'>Ad Soyad : </p>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className='ınp'
            type='text'
            placeholder='Adı ve Soyad giriniz...'
          />
        </div>

        <div className='userİnfo'>
          <p className='p'>Doğum Tarihi: </p>
          <input
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className='ınp'
            type='date'
          />
        </div>

        <div className='userİnfo'>
          <p className='p'>Telefon No: </p>
          <input
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            className='ınp'
            type='tel'
            placeholder='Telefon Numarası giriniz...'
          />
        </div>

        <div className='userİnfo'>
          <p className='p'>E-mail: </p>
          <input
            value={newMail}
            onChange={(e) => setNewMail(e.target.value)}
            className='ınp'
            type='email'
            placeholder='E-mail Adresi giriniz...'
          />
        </div>

        <button onClick={handleCreateUser}>Kaydet</button>
      </div>
    </div>
  );
}

export default UserCreate;
