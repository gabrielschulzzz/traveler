import { IoCloseSharp } from 'react-icons/io5';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import Modal from 'react-modal';

import { CardTop, CardBottom } from './styles';
import { Button } from '../Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

interface AddReviewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    place: string;
}


export function AddReviewModal({ isOpen, onRequestClose, place }: AddReviewModalProps) {
    const [review, setReview] = useState('')
    const [score, setScore] = useState(0)
    const [successAddReview, setSuccessAddReview] = useState(false);
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext)


    async function handleAddReview() {
        try {
            const response = await api.post("/reviews", {
                review,
                score: String(score),
                place
            })

            if (response.status === 200) {
                setSuccessAddReview(true)
                setReview('')
                setScore(0)
                onRequestClose()
            }
        } catch (error) {
            setError(error.message)
        }

    }

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

            {
                user ? successAddReview ?
                    <div>Review Adicionada!</div>
                    : <CardBottom>
                        <textarea
                            placeholder="Escreva aqui..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />

                        <div className="score">
                            <p>{score !== 0 ? `Sua nota: ${score}` : 'Sua nota de 1 a 5'}</p>
                            <div className="star-container">
                                <div className="star" onClick={() => setScore(1)}>
                                    {
                                        score >= 1 ? <AiFillStar className="star-color" /> : <AiOutlineStar className="star-normal" />
                                    }
                                </div>
                                <div className="star" onClick={() => setScore(2)}>
                                    {
                                        score >= 2 ? <AiFillStar className="star-color" /> : <AiOutlineStar className="star-normal" />
                                    }
                                </div>
                                <div className="star" onClick={() => setScore(3)}>
                                    {
                                        score >= 3 ? <AiFillStar className="star-color" /> : <AiOutlineStar className="star-normal" />
                                    }
                                </div>
                                <div className="star" onClick={() => setScore(4)}>
                                    {
                                        score >= 4 ? <AiFillStar className="star-color" /> : <AiOutlineStar className="star-normal" />
                                    }
                                </div>
                                <div className="star" onClick={() => setScore(5)}>
                                    {
                                        score >= 5 ? <AiFillStar className="star-color" /> : <AiOutlineStar className="star-normal" />
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="send">
                            <div className="alert">
                                <FiAlertCircle />
                                <p>Sua avaliacao podera ser removida se for desrespeitosa.</p>
                            </div>
                            <Button onClick={handleAddReview}>Enviar avaliacao</Button>
                        </div>
                    </CardBottom>
                    :
                    <CardBottom className="not-logged">
                        <h2>Apenas usuarios cadastrados podem adicionar reviews</h2>
                        <p><Link to="/register">Crie agora mesmo sua conta</Link>, ou faca o <Link to="/login">login.</Link></p>
                    </CardBottom>
            }



        </Modal>
    )
}