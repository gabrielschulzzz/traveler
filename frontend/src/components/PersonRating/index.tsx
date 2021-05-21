import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Container } from './styles';

interface PersonRatingProps {
    avatar: string | null;
    name: string;
    avaliacao: string;
    rating?: number;
}

export function PersonRating({ avatar, name, rating, avaliacao }: PersonRatingProps) {
    return (
        <Container>
            <div className="userRatings">
                {
                    avatar ? <img src={avatar} alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                }

                <div className="userProfile">
                    <div>
                        <div className="name-star">
                            <h3>{name}</h3>
                            <div>
                                {
                                    rating === 1
                                        ? <><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></>
                                        : ''
                                }

                                {
                                    rating === 2
                                        ? <><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></>
                                        : ''
                                }

                                {
                                    rating === 3
                                        ? <><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></>
                                        : ''
                                }

                                {
                                    rating === 4
                                        ? <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></>
                                        : ''
                                }

                                {
                                    rating === 5
                                        ? <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></>
                                        : ''
                                }
                            </div>
                        </div>
                        <p>{avaliacao}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}