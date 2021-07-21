import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Conta from './Conta';

describe('Componente de conta', () => {
    test('Exibir saldo da conta com formatação monetária', () => {
        render(<Conta saldo={1000} />);

        const saldo = screen.getByTestId('saldo-conta');

        expect(saldo.textContent).toBe('R$ 1000');
    });

    test('Chama a função de realizar transação quando o botão é clicado', () => {
        const funcaoRealizartransacao = jest.fn();
        render(<Conta
            saldo={1000}
            realizarTransacao={funcaoRealizartransacao}
        />);

        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizartransacao).toHaveBeenCalled();


    });
});