import Modal from "react-modal";
import { CardTop, CardBottom } from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import { BsChat } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface ReviewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ReviewModal({ isOpen, onRequestClose }: ReviewModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <CardTop>
                <div className="first">
                    <h3>Nota: 4.5</h3>
                    <BsChat />
                    <p>23 comentarios</p>
                </div>

                <div className="second">
                    <p className="add">Adicionar avaliacao</p>
                    <button className="close" onClick={onRequestClose}><IoCloseSharp /></button>
                </div>
            </CardTop>

            <CardBottom>
                <div className="first">
                    <img src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                </div>

                <div className="second">
                    <h3>Maria Eduarda</h3>
                    <p>Todos os produtos comercializados sao de excelente qualidade, recomendo!</p>
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
            </CardBottom>

            <CardBottom>
                <div className="first">
                    <img src="https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                </div>

                <div className="second">
                    <h3>Eduardo Vieira</h3>
                    <p>Grande variedade de bols, cucas, e algumas opcoes de salgados.</p>
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
                </div>
            </CardBottom>

            <CardBottom>
                <div className="first">
                    <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                </div>

                <div className="second">
                    <h3>Plinio Rachertz</h3>
                    <p>Nao atendeu as minhas exigencias.</p>
                    <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                </div>
            </CardBottom>

            <CardBottom>
                <div className="first">
                    <img src="https://images.unsplash.com/photo-1613730317185-5c455649f89d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                </div>

                <div className="second">
                    <h3>Rebeca Munhoz</h3>
                    <p>Parabens aos proprietarios e funcionarios pelo bom atendimento. Lugar aconchegante e com delicias variadas.</p>
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                </div>
            </CardBottom>

            <CardBottom>
                <div className="first">
                    <img src="https://images.unsplash.com/photo-1544098575-553f8a92c545?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                </div>

                <div className="second">
                    <h3>Plinio Rachertz</h3>
                    <p>Perfeito.</p>
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
            </CardBottom>
        </Modal>
    )
}