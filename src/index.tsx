import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Model, createServer } from 'miragejs';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelacer de website',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 6000,
                    createdAt: new Date('2023-12-28 11:00:00'),
                },
                {
                    id: 2,
                    title: 'Alugel',
                    type: 'withdraw',
                    category: 'Casa',
                    amount: 1200,
                    createdAt: new Date('2023-12-31 17:00:00'),
                },
            ],
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('transaction', data);
        });
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
