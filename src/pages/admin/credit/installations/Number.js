import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Number = props => {
    const [installationNumber, setInstallationNumber] = useState([]);
    const id = props.getNumber;

    const getData = async () => {
        try {
            const res = await axios.get(`https://sigusminera.online/api/installations_numbers/${id}`);
            setInstallationNumber(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div aria-label={`${installationNumber.numberInstallation}`}>
            {installationNumber.numberInstallation}
        </div>
    )
}
