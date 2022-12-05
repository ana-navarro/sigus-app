import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { ShowCompany } from '../ShowCompany';

const mockData = {
    id: 1,
    name: 'Minera Engenharia',
    email: 'aaa@aaa.com',
    phone: '(38)3213-6060',
    cnpj: '20.195.562/0001-45',
    address: {
        street: "Av. Gov. Magalhães Pinto",
        number: "2207A",
        moreInfo: "",
        block: "Alcides Rabelo",
        state: "MG",
        city: "Montes Claros",
        country: "Brasil",
        postalCode: 39401427
    }
}


const mockCompany = [
    {
        id: 2,
        name: 'Minera Engenharia',
        email: 'aaa@aaa.com',
        phone: '(38)3213-6060',
        cnpj: '20.195.562/0001-45',
    }
]

describe('Show Company Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the components', async () => {
        const { getByTestId } = render(<BrowserRouter><ShowCompany {...mockData} /></BrowserRouter>);
        jest.mock(mockData);
        expect(spy).toHaveBeenCalled()
        expect(getByTestId('company-title')).toBeInTheDocument();
        expect(getByTestId('show-company-name')).toBeInTheDocument();
        expect(getByTestId('show-company-edit-btn')).toBeInTheDocument();
        expect(getByTestId('show-company-delete-btn')).toBeInTheDocument();
        expect(getByTestId('show-company-email')).toBeInTheDocument();
        expect(getByTestId('show-company-phone')).toBeInTheDocument();
        expect(getByTestId('show-company-cnpj')).toBeInTheDocument();
        expect(getByTestId('show-company-address')).toBeInTheDocument();
    })
    it('Given user clicks on editar, should render edit component', async () => { })
    it('Given user clicks on excluir, should render delete component', async () => { })

    it('Given company has not address, should render add button address', async () => { })
    it('Given company has address, should render address', async () => { })
})