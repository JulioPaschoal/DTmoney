import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';

import incomeImg from '../../assets/incomeImg.svg';
import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcomeImg.svg';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export default function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');

    function handleCreateTransaction(event: FormEvent) {
        event.preventDefault();
        createTransaction({
            title,
            amount,
            category,
            type,
        });
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="recat-modal-close"
                >
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <Container onSubmit={handleCreateTransaction}>
                    <h2>Cadastrar transação</h2>
                    <input
                        placeholder="Título"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Valor"
                        value={amount}
                        onChange={event =>
                            setAmount(Number(event.target.value))
                        }
                    />
                    <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => {
                                setType('deposit');
                            }}
                            isActive={type === 'deposit'}
                            activeColor="green"
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada </span>
                        </RadioBox>
                        <RadioBox
                            type="button"
                            onClick={() => {
                                setType('withdraw');
                            }}
                            isActive={type === 'withdraw'}
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="Saida" />
                            <span>Saida </span>
                        </RadioBox>
                    </TransactionTypeContainer>
                    <input
                        placeholder="categoria"
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
        </>
    );
}
