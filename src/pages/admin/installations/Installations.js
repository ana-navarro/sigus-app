import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import { Table } from './components/Table';
import { Pagination } from '../../../components/Pagination'

export const Installations = () => {
    const [installations, setInstallations] = useState([]);
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const fetchInstallations = async () => {
            const res = await axios.get(`http://localhost:5000/api/installations_numbers/`);
            setInstallations(res.data);
            setCurrentPage(1);
        }
        fetchInstallations();
    }, []);

    const dadoAtual = useMemo(() => {
        const firstPage = (currentPage - 1) * 10;
        const lastPage = firstPage + 10;
        return installations && installations.slice(firstPage, lastPage);
    }, [currentPage]);


    return (
        <>
            <ToastContainer />
            <div>
                {<Table data={dadoAtual || installations} />}
            </div>
            {installations && (
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={installations && installations.length}
                    pageSize={10}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </>
    )
}
