import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { TableInst } from './Components/TableInst';
import { Title } from './styled.style';
import { Pagination } from '../../../components/Pagination';

export const MaintenanceInst = () => {
  const [installations, setInstallations] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  const dadoAtual = useMemo(() => {
    const firstPage = (currentPage - 1) * 10;
    const lastPage = firstPage + 10;
    return installations && installations.slice(firstPage, lastPage);
  }, [currentPage]);

  useEffect(() => {
    const fetchInstallations = async () => {
      const res = await axios.get(
        `https://181.215.134.184:5000/api/installations_numbers/`,
      );
      setInstallations(res.data);
      setCurrentPage(1);
    };
    fetchInstallations();
  }, [installations]);

  if (!installations) return 'Aguardando dados';
  if (!dadoAtual) return 'Aguardando dados';

  return (
    <div>
      <Title>Instalações</Title>
      <TableInst data={dadoAtual || installations} />
      {installations && (
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={installations && installations.length}
          pageSize={10}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};
