import { MenuItem, Select } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FormTitle, InputGroup, FormBody, FormLabel, GenericInput, ButtonGroup, SubmitButton } from './styled.style';

const monthsOptions = [
    { value: 'Janeiro', label: 'Janeiro', key: 1 },
    { value: 'Fevereiro', label: 'Fevereiro', key: 2 },
    { value: 'Março', label: 'Março', key: 3 },
    { value: 'Abril', label: 'Abril', key: 4 },
    { value: 'Maio', label: 'Maio', key: 5 },
    { value: 'Junho', label: 'Junho', key: 6 },
    { value: 'Julho', label: 'Julho', key: 7 },
    { value: 'Agosto', label: 'Agosto', key: 8 },
    { value: 'Setembro', label: 'Setembro', key: 9 },
    { value: 'Outubro', label: 'Outubro', key: 10 },
    { value: 'Novembro', label: 'Novembro', key: 11 },
    { value: 'Dezembro', label: 'Dezembro', key: 12 },
]

export const CreditAdd = () => {
    const [consumed, setConsumed] = useState();
    const [discount, setDiscount] = useState();
    const [distribuition, setDistribuition] = useState();
    const [month, setMonth] = useState();
    const [previousBalance, setPreviousBalance] = useState();
    const [actualBalance, setActualBalance] = useState();
    const [injected, setInjected] = useState();
    const [valueKwh, setValueKwh] = useState();
    const [expirationDate, setExpirationDate] = useState();

    const navigate = useNavigate();

    const [idInstallation, setIdInstallation] = useState();
    const [install, setInstall] = useState();

    useEffect(() => {
        const getInstallation = async () => {
            const response = await axios.get(`http://localhost:5000/api/installations_numbers/`);
            setInstall(response.data);
        }
        getInstallation()
    }, [install]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newCredit = {
            consumed,
            discount,
            distribuition,
            month,
            idInstallation,
            previousBalance,
            actualBalance,
            injected,
            valueKwh,
            expirationDate,
        }
        try {
            const res = await axios.post("http://localhost:5000/api/credit/add", newCredit);
            toast.dismiss();
            console.log(res.data.msg)
            toast.success(res.data.msg);
            navigate("/credit")
        } catch (error) {
            toast.dismiss();
            toast.error("Deu algum erro!");
            console.log(error)
        }
    }

    return (
        <>
            <ToastContainer />
            <FormBody>
                <FormTitle>Adicionar Crédito</FormTitle>
                <InputGroup>
                    <FormLabel>Número de Instalação:</FormLabel>
                    <Select
                        variant="filled"
                        labelId="installation"
                        placeholder="installation"
                        onChange={(e) => setIdInstallation(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        value={idInstallation}
                        fullWidth
                        required>
                        {install && install.map((installation) => (
                            <MenuItem key={installation._id} value={installation._id}>{installation.numberInstallation}</MenuItem>
                        ))}
                    </Select>
                    <FormLabel>Mês:</FormLabel>
                    <Select
                        variant="filled"
                        labelId="month"
                        placeholder="month"
                        onChange={(e) => setMonth(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        value={month}
                        fullWidth
                        required>
                        {monthsOptions.map((month, index) => (
                            <MenuItem key={index} value={month.value}>{month.label}</MenuItem>
                        ))}
                    </Select>
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Energia Consumida"
                        label="Energia Consumida"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setConsumed(e.target.value)}
                        value={consumed}
                        error={consumed === ""}
                        helperText={consumed === "" ? "Energia Consumida não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Distribuição"
                        label="Distribuição"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setDistribuition(e.target.value)}
                        value={distribuition}
                        error={distribuition === ""}
                        helperText={distribuition === "" ? "Distribuição não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Desconto"
                        label="Desconto"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setDiscount(e.target.value)}
                        value={discount}
                        error={discount === ""}
                        helperText={discount === "" ? "Desconto não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Balanço Anterior"
                        label="Balanço Anterior"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setPreviousBalance(e.target.value)}
                        value={previousBalance}
                        error={previousBalance === ""}
                        helperText={previousBalance === "" ? "Balanço Anterior não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Balanço Atual"
                        label="Balanço Atual"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setActualBalance(e.target.value)}
                        value={actualBalance}
                        error={actualBalance === ""}
                        helperText={actualBalance === "" ? "Balanço Atual não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Energia Injetada"
                        label="Energia Injetada"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setInjected(e.target.value)}
                        value={injected}
                        error={injected === ""}
                        helperText={injected === "" ? "Energia Injetada não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Valor KwH"
                        label="Valor KwH"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setValueKwh(e.target.value)}
                        value={valueKwh}
                        error={valueKwh === ""}
                        helperText={valueKwh === "" ? "Valor KwH não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="date"
                        placeholder="Data de Expiração"
                        label="Data de Expiração"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        value={expirationDate}
                        error={expirationDate === ""}
                        helperText={expirationDate === "" ? "Data de Expiração não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <ButtonGroup>
                    <SubmitButton onClick={handleSubmit}
                        disabled={!idInstallation || !month || !consumed || !distribuition || !discount || !previousBalance || !actualBalance || !injected || !valueKwh || !expirationDate}>
                        Enviar
                    </SubmitButton>
                </ButtonGroup>
            </FormBody>
        </>
    )
}
