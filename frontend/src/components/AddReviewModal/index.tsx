import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineCheckCircle, AiOutlineStar } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import { CardTop, CardBottom, SuccessReview } from './styles';
import { Button } from '../Button';
import { ToastContainer, toast } from 'react-toastify';

interface userAttr {
    avatar: string | null;
    email: string;
    id: string;
    name: string;
}

type Place = {
    name: string;
    photo: string;
}

interface reviewsAttr {
    id: string;
    review: string;
    score: string;
    user: userAttr;
    place: Place;
}

interface AddReviewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    place: string;
    setReviews: React.Dispatch<React.SetStateAction<reviewsAttr[]>>
    reviews: reviewsAttr[];
    city: string;
    photo: string;
    name: string;
}

export function AddReviewModal({ isOpen, onRequestClose, place, setReviews, reviews, city, name, photo }: AddReviewModalProps) {
    const [review, setReview] = useState('')
    const [score, setScore] = useState(0)
    const [successAddReview, setSuccessAddReview] = useState(false)
    const notify = () => toast.error("Preencha todos os campos!");

    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        console.log(user)
    }, [])


    async function handleAddReview() {
        if (!review || !score) {
            notify()
            return;
        }

        try {
            const response = await api.post("/reviews", {
                review,
                score: String(score),
                place
            })

            user &&
                setReviews([...reviews, {
                    id: response.data.id,
                    place: {
                        name,
                        photo
                    },
                    review,
                    score: String(score),
                    user: {
                        avatar: user?.avatar,
                        email: user?.email,
                        id: user?.id,
                        name: user.name
                    }
                }])

            user &&
                setUser({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar,
                    role: user.role,
                    reviews: [...user.reviews, {
                        id: response.data.id,
                        place: {
                            name,
                            photo
                        },
                        review,
                        score: String(score),
                    }]
                })


            if (response.status === 200) {
                setSuccessAddReview(true)
                setReview('')
                setScore(0)
            }
        } catch (error) {
        }

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content-small"
        >
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

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
                    <SuccessReview>
                        <div>
                            <h1>Review Adicionada!</h1>
                        </div>
                        <AiOutlineCheckCircle />
                        <div className="second">
                            <Link to={`/cities/${city}`}>
                                <p>Descobrir novos locais na cidade.</p>
                            </Link>
                        </div>
                    </SuccessReview>
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