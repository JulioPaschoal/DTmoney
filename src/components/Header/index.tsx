import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button onClick={onOpenNewTransitionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}
