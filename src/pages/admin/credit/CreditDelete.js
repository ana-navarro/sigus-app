import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const CreditDelete = () => {
    const id = useParams();
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
                excludeCredit(id.idCredit);
                Swal.fire('Excluído!', '', 'success');
                navigate(`/credit/`);
            } else if (result.isDenied) {
                navigate(`/credit/`);
            }
        })
        .catch((error) => console.log(error));

    async function excludeCredit(id) {
        try {
            const res = await axios.delete(
                `http://181.215.134.184//api/credit/${id}/delete`,
            );
        } catch (error) {
            console.log(error);
        }
    }
    return;
}