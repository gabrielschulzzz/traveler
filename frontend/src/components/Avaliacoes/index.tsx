import { Container } from './styles'
import { AiFillStar } from 'react-icons/ai';
import { PersonRating } from '../PersonRating';

interface AvaliacoesProps {
    handleReviewsModalOpen: () => void;
    handleAddReviewsModalOpen: () => void;
    reviews: reviewsAttr[];
}

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

export function Avaliacoes({ handleReviewsModalOpen, handleAddReviewsModalOpen, reviews }: AvaliacoesProps) {
    return (
        <Container>
            <div className="header">
                <div className="header-first">
                    <h2>Avaliações</h2>
                    <div className="rating">
                        <AiFillStar />
                        <p>4.5</p>
                    </div>
                </div>
                <ul>
                    <li className="open" onClick={handleAddReviewsModalOpen}>Adicionar</li>
                    <li className="open" onClick={handleReviewsModalOpen} >Ver todas</li>
                </ul>
            </div>

            {
                reviews.slice(0, 3).map(review => (
                    <PersonRating
                        key={review.user.id}
                        avatar={review.user.avatar}
                        name={review.user.name}
                        avaliacao={review.review}
                        rating={Number(review.score)}
                    />
                ))
            }
        </Container>
    )
}