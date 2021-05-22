import { AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { Container } from './styles';

interface Place {
    name: string;
    photo: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
}

interface ReviewAtributes {
    id: string;
    review: string;
    score: string;
    place: Place;
    user: User;
}

interface ReviewCardAdminProps {
    review: ReviewAtributes;
}

export function ReviewCardAdmin({ review }: ReviewCardAdminProps) {
    return (
        <Container>
            <div className="user">
                <h2>Usuario:</h2>
                {review.user.avatar
                    ? <img src={review.user.avatar} alt="" />
                    : <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="" />}
                <div className="user-info">
                    <h3>{review.user.name}</h3>
                    <p>{review.user.email}</p>
                </div>
                <div className="review-info">
                    <h3>Review:</h3>
                    <p>{review.review}</p>
                    {
                        Number(review.score) === 1 && <AiFillStar />
                    }
                    {
                        Number(review.score) === 2 && <><AiFillStar /><AiFillStar /></>
                    }
                    {
                        Number(review.score) === 3 && <><AiFillStar /><AiFillStar /><AiFillStar /></>
                    }
                    {
                        Number(review.score) === 4 && <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></>
                    }
                    {
                        Number(review.score) === 5 && <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></>
                    }
                </div>
            </div>
            <div className="place">
                <div className="icon-delete">
                    <AiOutlineDelete />
                </div>
                <div className="place-info">
                    <h3>Local:</h3>
                    <p>{review.place.name}</p>
                </div>
                <img src={review.place.photo} alt="" />
            </div>
        </Container>
    )
}