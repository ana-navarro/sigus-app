import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { DeleteButton, EditButton, ShowInfo, ShowName, ShowTitle, UnstyledLinks } from './styled.style'

export const ShowUser = () => {
  const [user, setUser] = useState([]);
  const { idUser } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${idUser}`);
        setUser(res.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      <ShowTitle>
        <ShowName>{user.name}</ShowName>
        <EditButton>
          <UnstyledLinks to={`/user/${user._id}/edit`}>Editar</UnstyledLinks>
        </EditButton>
        <DeleteButton>
          <UnstyledLinks to={`/user/${user._id}/delete`}>Excluir</UnstyledLinks>
        </DeleteButton>
      </ShowTitle>

      <ShowInfo>
        <p>Email: {user.email}</p>
      </ShowInfo>
    </>
  );
};
