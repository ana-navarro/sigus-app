import React, { useEffect, useState } from 'react'
import { ButtonGroup, FormBody, FormContent, FormLabel, FormTitle, GenericInput, InputGroup, SubmitButton } from './styled.style';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { MenuItem, Select } from '@material-ui/core';

export const AddInstallation = () => {
    const [idCompany, setIdCompany] = useState();
    const [companies, setCompanies] = useState([]);

    const [numberInstallation, setNumberInstallation] = useState();

    const navigate = useNavigate();

    const handleChangeCompany = (e) => {
        setIdCompany(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newInstall = {
            idCompany, numberInstallation
        }
        console.log(newInstall)
        try {
            const response = await axios.post("http://localhost:5000/api/installations_numbers/add", newInstall);
            toast.dismiss();
            navigate('/installations')
            toast.success(response.data.msg);
        } catch (error) {
            toast.error("Deu algum erro!");
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchTechnical = async () => {
            const res = await fetch('http://localhost:5000/api/company/');
            const json = await res.json();

            if (res.ok) {
                setCompanies(json);
            }
        };
        fetchTechnical();
    }, []);

    return (
        <>
            <ToastContainer />
            <FormBody>
                <FormTitle>Adicionar Número de Instalação:</FormTitle>
                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Número de Instalação"
                        label="Número de Instalação"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setNumberInstallation(e.target.value)}
                        value={numberInstallation}
                        error={numberInstallation === ""}
                        helperText={numberInstallation === "" ? "Número de Instalação não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <FormLabel>Empresa</FormLabel>
                    <Select
                        variant="filled"
                        labelId="Empresa"
                        placeholder="Empresa"
                        onChange={handleChangeCompany}
                        InputLabelProps={{ shrink: true }}
                        value={idCompany}
                        defaultValue=""
                        fullWidth
                        required
                    >
                        {companies && companies.map(({ _id, name }) => (
                            <MenuItem key={_id} value={_id}>{name}</MenuItem>
                        ))}
                    </Select>
                </InputGroup>

                <ButtonGroup>
                    <SubmitButton onClick={handleSubmit} disabled={!numberInstallation || !idCompany}>Enviar</SubmitButton>
                </ButtonGroup>
            </FormBody>
        </>
    )
}
