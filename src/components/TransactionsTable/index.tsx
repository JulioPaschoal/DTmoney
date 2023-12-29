import { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions').then(response => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td className="deposit">R$: 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2023</td>
                    </tr>
                    <tr>
                        <td>Alugel de Casa</td>
                        <td className="withdraw">R$: -1.350</td>
                        <td>Casa</td>
                        <td>01/12/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}