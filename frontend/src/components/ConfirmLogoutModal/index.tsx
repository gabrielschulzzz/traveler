import { FiLogOut } from 'react-icons/fi';
import { ImCancelCircle } from 'react-icons/im';
import Modal from 'react-modal';
import { Container } from './styles';

interface ConfirmLogoutModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    signOut: () => void;
}

export function ConfirmLogoutModal({ onRequestClose, isOpen, signOut }: ConfirmLogoutModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-logout"
        >
            <Container>
                <h2>Deseja mesmo sair?</h2>
                <div>
                    <div onClick={onRequestClose}>
                        <ImCancelCircle />
                        <p>Cancelar</p>
                    </div>

                    <div onClick={signOut}>
                        <FiLogOut />
                        <p>Sair</p>
                    </div>
                </div>
            </Container>
        </Modal>
    )
}