import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Number } from '../installations/Number';
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { HeaderAddButton, HeaderTable, HeaderTitle, Search, SearchBox, TableActionsTd, TableColumn, TableHeadActionsTh, TableHeadTh, TableRoot, TableRow, TableTd, UnstyleLink } from './styled.style';

export const Table = ({ data }) => {
    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <HeaderTable>
                <HeaderTitle>Lista de Créditos</HeaderTitle>
                <HeaderAddButton><UnstyleLink to={'/credit/add'}>Adicionar Crédito</UnstyleLink></HeaderAddButton>
                <Search>
                    <SearchBox
                        label='Pesquise por Mês'
                        className='search'
                        variant="outlined"
                        placeholder='Pesquise por Mês'
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </Search>
            </HeaderTable>

            <TableRoot>
                <TableHeadTh>Instação e Mês</TableHeadTh>
                <TableHeadActionsTh>Ações</TableHeadActionsTh>
                {data.filter((val) => {
                    if (searchItem === "") {
                        return val;
                    } else if (val.month.includes(searchItem)) {
                        return val;
                    }
                }).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((item) => (
                    <TableRow key={item._id}>
                        <TableColumn>
                            <TableTd>
                                <Link
                                    to={`/credit/${item._id}`}
                                >
                                    <Number getNumber={item.idInstallation} />{item.month}
                                </Link>
                            </TableTd>
                        </TableColumn>
                        <TableActionsTd>
                            <Link
                                to={`/credit/${item._id}/edit`}
                            >
                                <button className="btn btn-success m-2"><FaPen /></button>
                            </Link>
                            <Link
                                to={`/credit/${item._id}/delete`}
                            >
                                <button className="btn btn-danger"><FaTrashAlt /></button>
                            </Link>
                        </TableActionsTd>
                    </TableRow>
                ))}
            </TableRoot>
        </>
    )
}
