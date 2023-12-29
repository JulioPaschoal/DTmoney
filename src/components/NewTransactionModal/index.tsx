import Modal from 'react-modal';
import incomeImg from '../../assets/incomeImg.svg';
import outcomeImg from '../../assets/outcomeImg.svg';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export default function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
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
                <Container>
                    <h2>Cadastrar transação</h2>
                    <input placeholder="Título" />
                    <input type="number" placeholder="Valor" />
                    <TransactionTypeContainer>
                        <button type="button">
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada </span>
                        </button>
                        <button type="button">
                            <img src={outcomeImg} alt="Saida" />
                            <span>Saida </span>
                        </button>
                    </TransactionTypeContainer>
                    <input placeholder="categoria" />
                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
        </>
    );
}

//AULA F043
