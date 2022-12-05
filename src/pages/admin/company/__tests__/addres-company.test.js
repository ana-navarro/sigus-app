import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { AddAddress } from '../address/AddAddress';
import { ShowAddress } from '../address/ShowAddress';

const mockData = [
    {
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
]

describe("Address Component", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    describe('Show Address Component', () => {
        it('should render componentes', async () => {
            const { getByTestId } = await render(<BrowserRouter><ShowAddress /></BrowserRouter>)
            expect(getByTestId('show-address-header')).toBeInTheDocument();
            expect(getByTestId('show-address-edit-btn')).toBeInTheDocument();
            expect(getByTestId('show-address-delete-btn')).toBeInTheDocument();
            expect(getByTestId('show-address-street-number')).toBeInTheDocument();
            expect(getByTestId('show-address-block')).toBeInTheDocument();
            expect(getByTestId('show-address-moreInfo')).toBeInTheDocument();
            expect(getByTestId('show-address-postalCode')).toBeInTheDocument();
            expect(getByTestId('show-address-city')).toBeInTheDocument();
            expect(getByTestId('show-address-state')).toBeInTheDocument();
            expect(getByTestId('show-address-country')).toBeInTheDocument();
        });
        it('Given user clicks on editar, should render edit component', async () => { });
        it('Given user clicks on excluir, should render delete component', async () => { });
    })

    describe('Add Address Component', () => {
        it('should render components', async () => {
            const { getByTestId } = await render(<BrowserRouter><AddAddress /></BrowserRouter>);
            expect(getByTestId('add-address-header')).toBeInTheDocument();
            expect(getByTestId('add-address-cep')).toBeInTheDocument();
            expect(getByTestId('add-address-street')).toBeInTheDocument();
            expect(getByTestId('add-address-number')).toBeInTheDocument();
            expect(getByTestId('add-address-block')).toBeInTheDocument();
            expect(getByTestId('add-address-moreInfo')).toBeInTheDocument();
            expect(getByTestId('add-address-city')).toBeInTheDocument();
            expect(getByTestId('add-address-state')).toBeInTheDocument();
            expect(getByTestId('add-address-country')).toBeInTheDocument();
        })
    })

    describe('Edit Address Component', () => {
        it('should render componentes', async () => { })
    })

    describe('Delete Address Component', () => {
        it('should render componentes', async () => { })
    })
})
