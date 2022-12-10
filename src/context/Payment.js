import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PaymentContext = createContext({
    idClient: null,
    setIdClient: () => { },
    idCredit: null,
    setIdCredit: () => { },
    client: {},
    setClient: () => { },
    address: {},
    setAddress: () => { }
})

export const PaymentProvider = ({ children }) => {
    const [idClient, setIdClient] = useState();
    const [client, setClient] = useState();
    const [idCredit, setIdCredit] = useState();
    const [credit, setCredit] = useState();
    const [address, setAddress] = useState({});

    useEffect(() => {
        const fetchClientData = async () => {
            const res = await axios.get(`http://181.215.134.184:5000/api/client/${idClient}`)
            setClient(res.data);
        }
        fetchClientData();
    }, [idClient]);

    useEffect(() => {
        const fetchCreditData = async () => {
            const res = await axios.get(`http://181.215.134.184:5000/api/credit/${idCredit}`)
            setCredit(res.data)
        }
    }, [idCredit]);

    const value = { client, credit, setIdClient, setIdCredit };
    return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
}