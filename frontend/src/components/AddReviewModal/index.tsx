import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import Modal from 'react-modal';

import { CardTop, CardBottom } from './styles';
import { Button } from '../Button';

interface AddReviewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function AddReviewModal({ isOpen, onRequestClose }: AddReviewModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content-small"
        >

            <CardTop>
                <div className="first">
                    <h3>Adicionar avaliacao</h3>
                </div>

                <div className="second">
                    <button className="close" onClick={onRequestClose}><IoCloseSharp /></button>
                </div>
            </CardTop>

            <CardBottom>
                <textarea placeholder="Escreva aqui..." />

                <div className="score">
                    <p>Sua nota de 1 a 5</p>
                    <div className="star-container">
                        <div className="star">
                            <AiOutlineStar />
                        </div>
                        <div className="star">
                            <AiOutlineStar />
                        </div>
                        <div className="star">
                            <AiOutlineStar />
                        </div>
                        <div className="star">
                            <AiOutlineStar />
                        </div>
                        <div className="star">
                            <AiOutlineStar />
                        </div>
                    </div>
                </div>

                <div className="send">
                    <div className="alert">
                        <FiAlertCircle />
                        <p>Sua avaliacao sera analisada para poder ser publicada.</p>
                    </div>
                    <Button>Enviar avaliacao</Button>
                </div>
            </CardBottom>



        </Modal>
    )
}