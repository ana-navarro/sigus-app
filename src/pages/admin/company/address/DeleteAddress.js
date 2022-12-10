import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const DeleteAddress = () => {
    const idAddress = useParams();
    const navigate = useNavigate();

    Swal.fire({
        title: 'Você deseja realmente excluir?',
        showDenyButton: true,
        confirmButtonText: 'Sim',
        denyButtonText: 'Não',
        allowOutsideClick: false,
        allowEscapeKey: false,
    })
        .then((result) => {
            if (result.isConfirmed) {
                excludeUser(idAddress.idAddress);
                Swal.fire('Excluído!', '', 'success');
                navigate(`/company/`);
            } else if (result.isDenied) {
                navigate(`/company/`);
            }
        })
        .catch((error) => console.log(error));

    async function excludeUser(id) {
        try {
            const res = await axios.delete(
                `https://sigusminera.online/api/company/${id}/address/delete`,
            );
            toast.dismiss();
            toast.success(res.data.msg)
        } catch (error) {
            console.log(error);
        }
    }

    return;
}
