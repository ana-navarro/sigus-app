import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { HeaderAddButton, HeaderTable, HeaderTitle, Search, SearchBox, TableActionsTd, TableColumn, TableHeadActionsTh, TableHeadTh, TableRoot, TableRow, TableTd, UnstyleLink } from './styled.style';

export const Table = ({ data }) => {
    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <HeaderTable>
                <HeaderTitle>Lista de Administradores:</HeaderTitle>
                <HeaderAddButton><UnstyleLink to={'/register'}>Adicionar Admin</UnstyleLink></HeaderAddButton>
                <Search>
                    <SearchBox
                        label='Pesquise por Nome'
                        className='search'
                        variant="outlined"
                        placeholder='Pesquise pelo Nome'
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </Search>
            </HeaderTable>

            <TableRoot>
                <TableHeadTh>Nome</TableHeadTh>
                <TableHeadActionsTh>Ações</TableHeadActionsTh>
                {data.filter((val) => {
                    if (searchItem === "") {
                        return val;
                    } else if (val.name.includes(searchItem)) {
                        return val;
                    }
                }).map((item) => (
                    <TableRow key={item._id}>
                        <TableColumn>
                            <Link to={`/user/${item._id}`}>
                                <TableTd>{item.name}</TableTd>
                            </Link>
                        </TableColumn>
                        <TableActionsTd>
                            <Link
                                to={`/user/${item._id}/edit`}
                            >
                                <button className="btn btn-success m-2"><FaPen /></button>
                            </Link>
                            <Link
                                to={`/user/${item._id}/delete`}
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