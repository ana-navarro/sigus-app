import React from 'react'
import axios from 'axios'
import { PaymentButton } from './styled.style'

export const PayButton = ({ valuePayment, month, email, id }) => {
    const handleCheckout = async () => {
        const body = [
            valuePayment,
            month,
            email
        ]
        await axios.post(`http://sigus-server.vercel.app/api/stripe/${id}/payment`, body)
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url
                }
            }).catch((err) => console.log(err))
    }
    return (
        <div><PaymentButton onClick={() => handleCheckout()}>Pagar</PaymentButton></div>
    )
}
