import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { EditCompany } from '../EditCompany'
import { expect, it } from '@jest/globals';
import userEvent from '@testing-library/user-event'
import { waitFor } from "@testing-library/react";
import axios from 'axios';

const mockData = [
    {
        name: 'Minera Engenharia 1',
        email: 'aaa@aaa.com',
        phone: '(38)99999-9999',
        cnpj: '99.999.99/0001-00'
    }
]

describe('Edit Company Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('should render the component', async () => {
        const { getByTestId } = await render(<BrowserRouter><EditCompany /></BrowserRouter>)
        expect(getByTestId('edit-company-action')).toBeTruthy();
        expect(getByTestId('edit-company-name')).toBeTruthy();
        expect(getByTestId('edit-company-email')).toBeTruthy();
        expect(getByTestId('edit-company-cnpj')).toBeTruthy();
        expect(getByTestId('edit-company-phone')).toBeTruthy();
    });
    it('should open edit modal', async () => {
        const { getByTestId, getByText } = await render(<BrowserRouter><EditCompany {...mockData} /></BrowserRouter>);
        userEvent.click(getByTestId("edit-company-modal"));
        waitFor(() => expect(getByText("Você deseja realmente editar?")).toBeInTheDocument());
    });
    it('should edit company', async () => {
        const { getByTestId, getByText } = await render(<BrowserRouter><EditCompany {...mockData} /></BrowserRouter>);
        userEvent.click(getByTestId("edit-company-modal"));
        userEvent.click(getByText("Sim"));
        waitFor(() => expect(getByText("Editado com sucesso!")).toBeInTheDocument());
    });
    it('should not edit company', async () => {
        const { getByTestId, getByText } = await render(<BrowserRouter><EditCompany {...mockData} /></BrowserRouter>);
        userEvent.click(getByTestId("edit-company-modal"));
        userEvent.click(getByText("Não"));
        waitFor(() => expect(getByTestId("table-company")).toBeInTheDocument());
    });
})