import Modal from "react-modal";
import { ModalTop } from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import { BsChat } from 'react-icons/bs'
import { ReviewModalCard } from "../ReviewModalCard";

interface userAttr {
    avatar: string | null;
    email: string;
    id: string;
    name: string;
}

interface reviewsAttr {
    id: string;
    review: string;
    score: string;
    user: userAttr;
}

interface ReviewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    reviews: reviewsAttr[];
    handleAddReviewsModalOpen: () => void;
}


export function ReviewModal({ isOpen, onRequestClose, reviews, handleAddReviewsModalOpen }: ReviewModalProps) {
    function handleAddNewReview() {
        onRequestClose()
        handleAddReviewsModalOpen()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <ModalTop>
                <div className="first">
                    <h3>Nota: 4.5</h3>
                    <BsChat />
                    <p>{reviews.length} {reviews.length > 1 ? 'comentarios' : 'comentario'}</p>
                </div>

                <div className="second">
                    <p className="add" onClick={handleAddNewReview}>Adicionar avaliacao</p>
                    <button className="close" onClick={onRequestClose}><IoCloseSharp /></button>
                </div>
            </ModalTop>

            {
                reviews.map(review => (
                    <ReviewModalCard
                        name={review.user.name}
                        review={review.review}
                        score={review.score}
                        avatar={review.user.avatar}
                        onRequestClose={onRequestClose}
                    />
                ))
            }

        </Modal>
    )
}