import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { DeleteButton, EditButton, ShowInfo, ShowName, ShowTitle, UnstyledLinks } from './styled.style';

export const ShowInstallation = () => {
    const [installation, setInstallation] = useState([]);
    const [company, setCompany] = useState();
    const [companyName, setCompanyName] = useState();

    const id = useParams();
    const getCompanyName = async (id) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/company/${id}`)
            setCompanyName(res.data.company.name)
            setCompany(id)
        } catch (error) {
            console.error(error);
        }
    }

    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/installations_numbers/${id.idInstallation}`);
            setInstallation(res.data);
            getCompanyName(res.data.idCompany)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);


    return (
        <>
            <ToastContainer />
            <ShowTitle>
                <ShowName>Número de Instalação: {installation.numberInstallation}</ShowName>
                <EditButton>
                    <UnstyledLinks to={`/installations/${installation._id}/edit`}>Editar</UnstyledLinks>
                </EditButton>
                <DeleteButton>
                    <UnstyledLinks to={`/installations/${installation._id}/delete`}>Excluir</UnstyledLinks>
                </DeleteButton>
            </ShowTitle>
            <ShowInfo>
                <p>Empresa: <Link to={`/company/${company}`}>{companyName}</Link> </p>
            </ShowInfo>
        </>
    )
}
